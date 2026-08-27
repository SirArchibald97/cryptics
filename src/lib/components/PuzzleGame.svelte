<script lang="ts">
	import { untrack } from 'svelte';
	import type { Puzzle } from '$lib/types';
	import { getRecord, recordSolve, recordReveal } from '$lib/stores/progress.svelte';
	import { getInProgress, saveInProgress, clearInProgress } from '$lib/stores/inProgress.svelte';
	import { checkGuess, normalizeGuess } from '$lib/utils/clue';
	import { formatDateLong } from '$lib/utils/date';
	import { HINT_COLORS, HINT_DOT_COLORS, HINT_LABELS } from '$lib/utils/hintColors';
	import type { HighlightSpec } from '$lib/utils/highlight';
	import Button from './Button.svelte';
	import ExplanationPanel from './ExplanationPanel.svelte';
	import LetterBoxInput from './LetterBoxInput.svelte';
	import HighlightedClue from './HighlightedClue.svelte';

	let { puzzle, number }: { puzzle: Puzzle; number: number } = $props();

	// Each puzzle gets a fresh component instance (see the {#key} in the routes that
	// render this), so `puzzle` never changes during this instance's lifetime — this
	// read is intentionally only meant to happen once, at mount.
	const existing = untrack(() => getRecord(puzzle.id));
	const existingProgress = untrack(() => getInProgress(puzzle.id));

	let guess = $state('');
	let attempts = $state(existing?.attempts ?? existingProgress?.attempts ?? 0);
	let status = $state<'playing' | 'solved' | 'revealed'>(existing?.status ?? 'playing');
	let shake = $state(false);
	let confirmingReveal = $state(false);
	let wrongFlash = $state(false);

	let hintFlags = $state(
		existingProgress?.hintFlags ?? { indicator: false, fodder: false, definition: false }
	);
	let lockedLetters = $state<Record<number, string>>(existingProgress?.lockedLetters ?? {});

	const finished = $derived(status !== 'playing');

	// Persist hint/letter/attempt progress as it happens, so leaving and coming back
	// to an unfinished puzzle doesn't lose what's already been used.
	$effect(() => {
		if (finished) return;
		saveInProgress(puzzle.id, {
			hintFlags: { ...hintFlags },
			lockedLetters: { ...lockedLetters },
			attempts
		});
	});
	const answerLength = $derived(puzzle.answer.length);
	const isGuessComplete = $derived(normalizeGuess(guess).length === answerLength);
	const hintsUsedCount = $derived(
		(hintFlags.indicator ? 1 : 0) +
			(hintFlags.fodder ? 1 : 0) +
			(hintFlags.definition ? 1 : 0) +
			Object.keys(lockedLetters).length
	);
	// Once finished, prefer the persisted record — on a revisit, `hintFlags`/`lockedLetters`
	// start empty since only the total was ever saved, not which hints were used.
	const record = $derived(getRecord(puzzle.id));
	const hintsUsedDisplay = $derived(record?.hintsUsed ?? hintsUsedCount);

	const unrevealedCount = $derived(answerLength - Object.keys(lockedLetters).length);
	const hintKinds = ['indicator', 'fodder', 'definition'] as const;

	// While playing, only highlight hints actually used; once finished, show the
	// full breakdown regardless of which hints were used to get there. Each hint
	// kind can have several substrings (e.g. multiple bits of fodder), so every
	// string in the array gets its own highlight, all in that kind's color.
	const displayHighlights = $derived(
		hintKinds
			.filter((kind) => finished || hintFlags[kind])
			.flatMap((kind) =>
				puzzle.hints[kind].map((text): HighlightSpec => ({ text, className: HINT_COLORS[kind] }))
			)
	);

	function submitGuess() {
		if (finished || !isGuessComplete) return;
		attempts++;
		if (checkGuess(guess, puzzle.answer)) {
			status = 'solved';
			recordSolve(puzzle.id, hintsUsedCount, attempts);
			clearInProgress(puzzle.id);
		} else {
			wrongFlash = true;
			shake = true;
			setTimeout(() => (shake = false), 400);
			setTimeout(() => (wrongFlash = false), 1600);
		}
	}

	function useHint(kind: 'indicator' | 'fodder' | 'definition') {
		if (finished || hintFlags[kind]) return;
		hintFlags[kind] = true;
	}

	function revealLetter() {
		if (finished || unrevealedCount <= 1) return;
		const options = Array.from({ length: answerLength }, (_, i) => i).filter(
			(i) => lockedLetters[i] === undefined
		);
		const idx = options[Math.floor(Math.random() * options.length)];
		lockedLetters[idx] = puzzle.answer[idx];
	}

	function revealAnswer() {
		status = 'revealed';
		recordReveal(puzzle.id, hintsUsedCount, attempts);
		clearInProgress(puzzle.id);
		confirmingReveal = false;
	}
</script>

<div class="mx-auto w-full max-w-xl rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-7 dark:border-stone-800 dark:bg-stone-900">
	<div class="mb-4 flex flex-wrap items-center justify-between gap-2">
		<p class="text-xs font-semibold uppercase tracking-wide text-stone-400 dark:text-stone-500">
			No. {number} &middot; {formatDateLong(puzzle.id)}
		</p>
		<span class="rounded-full bg-stone-100 px-2.5 py-1 text-xs font-semibold text-stone-500 dark:bg-stone-800 dark:text-stone-400">
			{hintsUsedDisplay} hint{hintsUsedDisplay === 1 ? '' : 's'} used
		</span>
	</div>

	<p class="font-display text-2xl leading-snug font-medium text-stone-900 sm:text-3xl dark:text-stone-50">
		<HighlightedClue clue={puzzle.clue} highlights={displayHighlights} />
	</p>

	{#if finished}
		<div class="mt-2 flex flex-wrap gap-3 text-xs text-stone-500 dark:text-stone-400">
			{#each hintKinds as kind (kind)}
				<span class="flex items-center gap-1.5">
					<span class="h-2.5 w-2.5 rounded-full {HINT_DOT_COLORS[kind]}"></span>
					{HINT_LABELS[kind]}
				</span>
			{/each}
		</div>
	{/if}

	{#if !finished}
		<div class="mt-6 space-y-4">
			<div>
				<LetterBoxInput
					bind:value={guess}
					length={answerLength}
					shake={shake}
					invalid={wrongFlash}
					lockedLetters={lockedLetters}
					onSubmit={submitGuess}
				/>
				<p class="mt-1.5 text-center text-xs text-stone-400 dark:text-stone-500">
					{normalizeGuess(guess).length} / {answerLength} letters
					{#if attempts > 0}&middot; {attempts} attempt{attempts === 1 ? '' : 's'}{/if}
				</p>
			</div>

			<Button type="button" onclick={submitGuess} disabled={!isGuessComplete} class="w-full">
				Guess
			</Button>

			<div class="space-y-2">
				<p class="text-xs font-semibold uppercase tracking-wide text-stone-400 dark:text-stone-500">Hints</p>
				<div class="flex flex-wrap gap-2">
					{#each hintKinds as kind (kind)}
						<button
							type="button"
							onclick={() => useHint(kind)}
							disabled={hintFlags[kind]}
							class="cursor-pointer rounded-full px-3 py-1.5 text-xs font-semibold transition disabled:cursor-not-allowed {hintFlags[
								kind
							]
								? HINT_COLORS[kind]
								: 'bg-stone-200 text-stone-700 hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700'}"
						>
							{hintFlags[kind] ? `${HINT_LABELS[kind]} ✓` : `Show ${HINT_LABELS[kind].toLowerCase()}`}
						</button>
					{/each}
					<button
						type="button"
						onclick={revealLetter}
						disabled={unrevealedCount <= 1}
						class="cursor-pointer rounded-full bg-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 transition hover:bg-stone-300 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700"
					>
						Reveal a letter
					</button>
				</div>
				{#if Object.keys(lockedLetters).length > 0}
					<p class="text-xs text-stone-400 dark:text-stone-500">
						{Object.keys(lockedLetters).length} of {answerLength} letters revealed
					</p>
				{/if}
			</div>

			<div class="border-t border-stone-100 pt-4 dark:border-stone-800">
				{#if confirmingReveal}
					<div class="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-stone-100 p-3 dark:bg-stone-800/60">
						<p class="text-sm text-stone-600 dark:text-stone-300">Reveal the answer? This will end the puzzle.</p>
						<div class="flex gap-2">
							<Button variant="ghost" onclick={() => (confirmingReveal = false)}>Cancel</Button>
							<Button variant="danger" onclick={revealAnswer}>Reveal</Button>
						</div>
					</div>
				{:else}
					<button
						type="button"
						onclick={() => (confirmingReveal = true)}
						class="text-sm font-medium text-stone-400 underline decoration-dotted underline-offset-4 transition hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300"
					>
						I give up — reveal the answer
					</button>
				{/if}
			</div>
		</div>
	{:else}
		<div class="mt-6">
			<ExplanationPanel {puzzle} {number} record={record!} />
		</div>
	{/if}
</div>
