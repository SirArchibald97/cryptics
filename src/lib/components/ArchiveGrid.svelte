<script lang="ts">
	import { puzzles } from '$lib/data/puzzles';
	import { isUnlocked, formatDate } from '$lib/utils/date';
	import { getRecord } from '$lib/stores/progress.svelte';

	const sorted = puzzles.slice().sort((a, b) => (a.date < b.date ? 1 : -1));

	const statusStyle = {
		solved: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
		revealed: 'bg-stone-200 text-stone-600 dark:bg-stone-700 dark:text-stone-300',
		unplayed: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
	};
</script>

<div class="grid gap-3 sm:grid-cols-2">
	{#each sorted as puzzle (puzzle.id)}
		{@const locked = !isUnlocked(puzzle)}
		{@const record = getRecord(puzzle.id)}
		{#if locked}
			<div
				class="flex items-center justify-between rounded-xl border border-dashed border-stone-300 p-4 dark:border-stone-700"
			>
				<div>
					<p class="text-sm font-medium text-stone-400 dark:text-stone-600">No. {puzzle.number}</p>
					<p class="text-xs text-stone-400 dark:text-stone-600">{formatDate(puzzle.date)}</p>
				</div>
				<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-stone-300 dark:text-stone-700">
					<rect x="5" y="10.5" width="14" height="9" rx="2" />
					<path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
				</svg>
			</div>
		{:else}
			<a
				href="/puzzle/{puzzle.id}"
				class="flex items-center justify-between rounded-xl border border-stone-200 bg-white p-4 transition hover:border-amber-500 hover:shadow-sm dark:border-stone-800 dark:bg-stone-900 dark:hover:border-amber-500"
			>
				<div>
					<p class="text-sm font-medium text-stone-900 dark:text-stone-50">No. {puzzle.number}</p>
					<p class="text-xs text-stone-500 dark:text-stone-400">
						{formatDate(puzzle.date)} &middot; <span class="capitalize">{puzzle.difficulty}</span>
					</p>
				</div>
				<span class="rounded-full px-2.5 py-1 text-xs font-semibold {statusStyle[record?.status ?? 'unplayed']}">
					{record?.status === 'solved' ? 'Solved' : record?.status === 'revealed' ? 'Revealed' : 'Play'}
				</span>
			</a>
		{/if}
	{/each}
</div>
