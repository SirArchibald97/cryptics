<script lang="ts">
	import { highlightClue, type HighlightSpec } from '$lib/utils/highlight';

	let { clue, highlights }: { clue: string; highlights: HighlightSpec[] } = $props();

	const segments = $derived(highlightClue(clue, highlights));
</script>

{#each segments as segment, i (i)}{#if segment.className}<span class="rounded px-1 py-0.5 {segment.className}">{segment.text}</span>{:else}{segment.text}{/if}{/each}
