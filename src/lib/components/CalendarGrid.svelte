<script lang="ts">
	import { puzzles } from '$lib/data/puzzles';
	import { isUnlocked, getTodaysPuzzle } from '$lib/utils/date';
	import { getRecord, stats } from '$lib/stores/progress.svelte';
	import PrizeReveal from './PrizeReveal.svelte';

	const sorted = puzzles.slice().sort((a, b) => (a.date < b.date ? -1 : 1));
	const todaysPuzzle = getTodaysPuzzle(puzzles);

	const cellBase =
		'relative flex aspect-square flex-col items-center justify-center gap-1 rounded-xl border-2 font-display text-lg font-bold transition';

	const statusStyle = {
		solved:
			'border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300',
		revealed:
			'border-stone-300 bg-stone-100 text-stone-500 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-400',
		unplayed:
			'border-stone-200 bg-white text-stone-700 hover:border-amber-500 hover:shadow-sm dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200'
	};
</script>

{#if stats.complete}
	<PrizeReveal />
{/if}

<div class="grid grid-cols-5 gap-2.5 sm:gap-3 md:grid-cols-6">
	{#each sorted as puzzle (puzzle.id)}
		{@const locked = !isUnlocked(puzzle)}
		{@const record = getRecord(puzzle.id)}
		{@const isToday = puzzle.id === todaysPuzzle?.id}

		{#if locked}
			<div
				class="{cellBase} border-dashed border-stone-200 bg-stone-50 text-stone-300 dark:border-stone-800 dark:bg-stone-900/40 dark:text-stone-700"
			>
				<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<rect x="5" y="10.5" width="14" height="9" rx="2" />
					<path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
				</svg>
				<span class="text-xs">{puzzle.number}</span>
			</div>
		{:else}
			<a
				href="/puzzle/{puzzle.id}"
				class="{cellBase} {statusStyle[record?.status ?? 'unplayed']} {isToday
					? 'ring-2 ring-amber-500 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-950'
					: ''}"
			>
				{#if isToday}
					<span
						class="absolute -top-2 rounded-full bg-amber-600 px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-white uppercase dark:bg-amber-500 dark:text-stone-950"
					>
						Today
					</span>
				{/if}
				{#if record?.status === 'solved'}
					<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
						<path d="M4 12.5l5 5 11-11" />
					</svg>
				{:else if record?.status === 'revealed'}
					<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z" />
						<circle cx="12" cy="12" r="2.5" />
					</svg>
				{/if}
				<span>{puzzle.number}</span>
			</a>
		{/if}
	{/each}
</div>
