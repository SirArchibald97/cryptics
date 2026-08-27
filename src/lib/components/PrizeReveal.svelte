<script lang="ts">
	import { prize } from '$lib/data/prize';

	const sparkles = ['✨', '🎊', '⭐', '🎉', '✨'];
</script>

<div
	class="relative mb-8 overflow-hidden rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 p-6 text-center shadow-sm dark:border-amber-700 dark:from-amber-950/40 dark:to-orange-950/30"
>
	<div class="pointer-events-none absolute inset-0 text-lg opacity-70" aria-hidden="true">
		<span class="absolute top-3 left-4">{sparkles[0]}</span>
		<span class="absolute top-2 right-6">{sparkles[1]}</span>
		<span class="absolute bottom-3 left-8">{sparkles[2]}</span>
		<span class="absolute right-4 bottom-2">{sparkles[3]}</span>
		<span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{sparkles[4]}</span>
	</div>
	<div class="relative">
		<p class="text-4xl">🏆</p>
		<h2 class="mt-2 font-display text-xl font-bold text-stone-900 dark:text-stone-50">{prize.title}</h2>
		<p class="mx-auto mt-1 max-w-sm text-sm text-stone-600 dark:text-stone-300">{prize.message}</p>
	</div>
</div>
