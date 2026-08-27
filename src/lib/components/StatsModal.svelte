<script lang="ts">
	import Modal from './Modal.svelte';
	import { stats } from '$lib/stores/progress.svelte';

	let { open = $bindable(false) }: { open?: boolean } = $props();
</script>

<Modal bind:open title="Your stats">
	<div class="grid grid-cols-4 gap-2 text-center">
		<div class="rounded-xl bg-stone-100 py-3 dark:bg-stone-800/60">
			<p class="text-2xl font-bold text-stone-900 dark:text-stone-50">{stats.played}</p>
			<p class="mt-1 text-[11px] uppercase tracking-wide text-stone-500 dark:text-stone-400">Played</p>
		</div>
		<div class="rounded-xl bg-stone-100 py-3 dark:bg-stone-800/60">
			<p class="text-2xl font-bold text-stone-900 dark:text-stone-50">{stats.winPercent}%</p>
			<p class="mt-1 text-[11px] uppercase tracking-wide text-stone-500 dark:text-stone-400">Solved</p>
		</div>
		<div class="rounded-xl bg-stone-100 py-3 dark:bg-stone-800/60">
			<p class="text-2xl font-bold text-stone-900 dark:text-stone-50">{stats.currentStreak}</p>
			<p class="mt-1 text-[11px] uppercase tracking-wide text-stone-500 dark:text-stone-400">Streak</p>
		</div>
		<div class="rounded-xl bg-stone-100 py-3 dark:bg-stone-800/60">
			<p class="text-2xl font-bold text-stone-900 dark:text-stone-50">{stats.maxStreak}</p>
			<p class="mt-1 text-[11px] uppercase tracking-wide text-stone-500 dark:text-stone-400">Best</p>
		</div>
	</div>

	{#if stats.played === 0}
		<p class="mt-5 text-center text-sm text-stone-500 dark:text-stone-400">
			Solve your first clue to start tracking stats.
		</p>
	{:else}
		<p class="mt-5 text-center text-sm text-stone-500 dark:text-stone-400">
			Streak counts consecutive daily puzzles solved without a reveal, ending today.
		</p>
	{/if}
</Modal>
