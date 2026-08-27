<script lang="ts">
	import type { Puzzle, PuzzleRecord } from '$lib/types';
	import { buildShareText, copyToClipboard } from '$lib/utils/share';
	import Button from './Button.svelte';

	let { puzzle, record }: { puzzle: Puzzle; record: PuzzleRecord } = $props();

	let copied = $state(false);

	const clueParts = $derived.by(() => {
		const idx = puzzle.clue.toLowerCase().indexOf(puzzle.explanation.definition.toLowerCase());
		if (idx === -1) return { before: puzzle.clue, match: '', after: '' };
		return {
			before: puzzle.clue.slice(0, idx),
			match: puzzle.clue.slice(idx, idx + puzzle.explanation.definition.length),
			after: puzzle.clue.slice(idx + puzzle.explanation.definition.length)
		};
	});

	async function share() {
		const ok = await copyToClipboard(buildShareText(puzzle, record));
		if (ok) {
			copied = true;
			setTimeout(() => (copied = false), 2000);
		}
	}
</script>

<div class="space-y-5">
	{#if record.status === 'solved'}
		<div class="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
			<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0">
				<path d="M4 12.5l5 5 11-11" />
			</svg>
			<p class="text-sm font-semibold">
				Solved{record.hintsUsed > 0 ? ` with ${record.hintsUsed} hint${record.hintsUsed === 1 ? '' : 's'}` : ' with no hints'}!
			</p>
		</div>
	{:else}
		<div class="flex items-center gap-2 rounded-xl bg-stone-100 px-4 py-3 text-stone-600 dark:bg-stone-800/60 dark:text-stone-300">
			<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0">
				<circle cx="12" cy="12" r="9" />
				<line x1="12" y1="8" x2="12" y2="12.5" />
				<circle cx="12" cy="15.8" r="0.9" fill="currentColor" stroke="none" />
			</svg>
			<p class="text-sm font-semibold">Answer revealed</p>
		</div>
	{/if}

	<div>
		<p class="text-lg leading-snug text-stone-800 dark:text-stone-100">
			{clueParts.before}<span class="underline decoration-amber-600 decoration-2 underline-offset-4 font-semibold text-stone-900 dark:decoration-amber-400 dark:text-stone-50">{clueParts.match}</span>{clueParts.after}
		</p>
	</div>

	<div class="flex flex-wrap items-center gap-2">
		<span class="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300">
			{puzzle.clueType}
		</span>
		<span class="font-display text-2xl font-bold tracking-wide text-stone-900 dark:text-stone-50">
			{puzzle.answer}
		</span>
	</div>

	<p class="rounded-xl border border-stone-200 bg-stone-50 p-4 text-sm leading-relaxed text-stone-600 dark:border-stone-800 dark:bg-stone-900/60 dark:text-stone-300">
		{puzzle.explanation.wordplay}
	</p>

	<Button variant="secondary" onclick={share}>
		{#if copied}
			Copied!
		{:else}
			Share result
		{/if}
	</Button>
</div>
