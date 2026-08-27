<script lang="ts">
	import { untrack } from 'svelte';
	import type { Puzzle } from '$lib/types';
	import { getRecord, recordSolve, recordReveal } from '$lib/stores/progress.svelte';
	import { checkGuess, normalizeGuess } from '$lib/utils/clue';
	import { formatDateLong } from '$lib/utils/date';
	import Button from './Button.svelte';
	import ExplanationPanel from './ExplanationPanel.svelte';
	import LetterBoxInput from './LetterBoxInput.svelte';

	let { puzzle }: { puzzle: Puzzle } = $props();

	// Each puzzle gets a fresh component instance (see the {#key} in the routes that
	// render this), so `puzzle` never changes during this instance's lifetime — this
	// read is intentionally only meant to happen once, at mount.
	const existing = untrack(() => getRecord(puzzle.id));

	let guess = $state('');
	let hintsRevealed = $state(existing?.hintsUsed ?? 0);
	let attempts = $state(existing?.attempts ?? 0);
	let status = $state<'playing' | 'solved' | 'revealed'>(existing?.status ?? 'playing');
	let shake = $state(false);
	let confirmingReveal = $state(false);
	let wrongFlash = $state(false);

	const finished = $derived(status !== 'playing');
	const answerLength = $derived(puzzle.answer.length);

	const difficultyStyle: Record<Puzzle['difficulty'], string> = {
		easy: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
		medium: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
		hard: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300'
	};

	function submitGuess() {
		if (finished || !guess.trim()) return;
		attempts++;
		if (checkGuess(guess, puzzle.answer)) {
			status = 'solved';
			recordSolve(puzzle.id, hintsRevealed, attempts);
		} else {
			wrongFlash = true;
			shake = true;
			setTimeout(() => (shake = false), 400);
			setTimeout(() => (wrongFlash = false), 1600);
		}
	}

	function getHint() {
		if (finished || hintsRevealed >= puzzle.hints.length) return;
		hintsRevealed++;
	}

	function revealAnswer() {
		status = 'revealed';
		recordReveal(puzzle.id, hintsRevealed, attempts);
		confirmingReveal = false;
	}
</script>

<div class="mx-auto w-full max-w-xl rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-7 dark:border-stone-800 dark:bg-stone-900">
	<div class="mb-4 flex flex-wrap items-center justify-between gap-2">
		<div>
			<p class="text-xs font-semibold uppercase tracking-wide text-stone-400 dark:text-stone-500">
				No. {puzzle.number} &middot; {formatDateLong(puzzle.date)}
			</p>
		</div>
		<span class="rounded-full px-2.5 py-1 text-xs font-semibold capitalize {difficultyStyle[puzzle.difficulty]}">
			{puzzle.difficulty}
		</span>
	</div>

	<p class="font-display text-2xl leading-snug font-medium text-stone-900 sm:text-3xl dark:text-stone-50">
		{puzzle.clue}
	</p>

	{#if !finished}
		<div class="mt-6 space-y-4">
			<div>
				<LetterBoxInput
					bind:value={guess}
					length={answerLength}
					shake={shake}
					invalid={wrongFlash}
					onSubmit={submitGuess}
				/>
				<p class="mt-1.5 text-center text-xs text-stone-400 dark:text-stone-500">
					{normalizeGuess(guess).length} / {answerLength} letters
					{#if attempts > 0}&middot; {attempts} attempt{attempts === 1 ? '' : 's'}{/if}
				</p>
			</div>

			<div class="flex flex-wrap gap-2">
				<Button type="button" onclick={submitGuess} disabled={!guess.trim()} class="flex-1">
					Guess
				</Button>
				<Button variant="secondary" onclick={getHint} disabled={hintsRevealed >= puzzle.hints.length} class="flex-1">
					Get a hint ({hintsRevealed}/{puzzle.hints.length})
				</Button>
			</div>

			{#if hintsRevealed > 0}
				<ul class="space-y-2">
					{#each puzzle.hints.slice(0, hintsRevealed) as hint, i (i)}
						<li class="flex gap-2 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
							<span class="font-semibold">{i + 1}.</span>
							<span>{hint}</span>
						</li>
					{/each}
				</ul>
			{/if}

			<div class="border-t border-stone-100 pt-4 dark:border-stone-800">
				{#if confirmingReveal}
					<div class="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-stone-100 p-3 dark:bg-stone-800/60">
						<p class="text-sm text-stone-600 dark:text-stone-300">Reveal the answer? Your streak won't count today.</p>
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
			<ExplanationPanel {puzzle} record={getRecord(puzzle.id)!} />
		</div>
	{/if}
</div>
