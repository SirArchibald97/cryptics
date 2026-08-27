<script lang="ts">
	import CalendarGrid from '$lib/components/CalendarGrid.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
</script>

<svelte:head>
	<title>Cryptics — Calendar</title>
</svelte:head>

<h1 class="mb-1 text-center font-display text-2xl font-semibold text-stone-900 dark:text-stone-50">
	Cryptics Calendar
</h1>
<p class="mb-4 text-center text-sm text-stone-500 dark:text-stone-400">
	A new clue unlocks every day. Solve them all to win the prize.
</p>

<ProgressBar />

<CalendarGrid />
