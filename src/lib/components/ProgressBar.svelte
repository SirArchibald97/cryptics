<script lang="ts">
	import { stats } from '$lib/stores/progress.svelte';

	const percent = $derived(stats.total === 0 ? 0 : Math.round((stats.played / stats.total) * 100));
</script>

<div class="mx-auto mb-6 max-w-sm">
	<div class="mb-1.5 flex items-center justify-between text-xs font-medium text-stone-500 dark:text-stone-400">
		<span>Calendar progress</span>
		<span>{percent}%</span>
	</div>
	<div class="h-2.5 w-full overflow-hidden rounded-full bg-stone-200 dark:bg-stone-800">
		<div
			class="h-full rounded-full bg-amber-600 transition-all duration-500 ease-out dark:bg-amber-500"
			style="width: {percent}%"
		></div>
	</div>
</div>
