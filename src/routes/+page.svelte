<script lang="ts">
	import { puzzles } from '$lib/data/puzzles';
	import { getTodaysPuzzle } from '$lib/utils/date';
	import PuzzleGame from '$lib/components/PuzzleGame.svelte';

	const puzzle = getTodaysPuzzle(puzzles);
</script>

<svelte:head>
	<title>Cryptics — Today's Clue</title>
</svelte:head>

{#if puzzle}
	<p class="mb-4 text-center text-sm font-medium text-stone-500 dark:text-stone-400">Today's clue</p>
	{#key puzzle.id}
		<PuzzleGame {puzzle} />
	{/key}
	<p class="mt-6 text-center text-sm">
		<a
			href="/archive"
			class="text-stone-400 underline decoration-dotted underline-offset-4 transition hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300"
		>
			Browse past puzzles &rarr;
		</a>
	</p>
{:else}
	<p class="text-center text-stone-500 dark:text-stone-400">No puzzles yet — check back soon.</p>
{/if}
