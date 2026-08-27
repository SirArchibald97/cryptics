<script lang="ts">
	import type { PageProps } from './$types';
	import PuzzleGame from '$lib/components/PuzzleGame.svelte';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Cryptics — No. {data.number}</title>
</svelte:head>

<p class="mb-4 text-sm">
	<a
		href="/"
		class="text-stone-400 underline decoration-dotted underline-offset-4 transition hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300"
	>
		&larr; Calendar
	</a>
</p>

{#key data.puzzle.id}
	<PuzzleGame puzzle={data.puzzle} number={data.number} />
{/key}
