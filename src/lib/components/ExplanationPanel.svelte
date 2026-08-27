<script lang="ts">
	import type { Puzzle, PuzzleRecord } from '$lib/types';
	import { buildShareText, copyToClipboard } from '$lib/utils/share';
	import Button from './Button.svelte';

	let { puzzle, number, record }: { puzzle: Puzzle; number: number; record: PuzzleRecord } = $props();

	let copied = $state(false);

	async function share() {
		const ok = await copyToClipboard(buildShareText(number, record));
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
			<p class="text-sm font-semibold">Solved!</p>
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

	<div class="rounded-xl border border-stone-200 bg-stone-50 p-5 text-center dark:border-stone-800 dark:bg-stone-900/60">
		<p class="text-xs font-semibold uppercase tracking-wide text-stone-400 dark:text-stone-500">Answer</p>
		<p class="mt-1 font-display text-2xl font-bold tracking-wide text-stone-900 dark:text-stone-50">
			{puzzle.answer}
		</p>

		<div class="mx-auto my-4 h-px w-16 bg-stone-200 dark:bg-stone-800"></div>

		<p class="text-xs font-semibold uppercase tracking-wide text-stone-400 dark:text-stone-500">Explanation</p>
		<p class="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
			{puzzle.explanation}
		</p>
	</div>

	<Button variant="secondary" onclick={share} class="w-full">
		{#if copied}
			Copied!
		{:else}
			Share result
		{/if}
	</Button>
</div>
