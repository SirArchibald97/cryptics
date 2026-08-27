<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Cryptics — {page.status}</title>
</svelte:head>

<div class="mx-auto flex max-w-xl flex-col items-center gap-3 rounded-2xl border border-stone-200 bg-white p-10 text-center shadow-sm dark:border-stone-800 dark:bg-stone-900">
	<p class="font-display text-4xl font-semibold text-stone-900 dark:text-stone-50">{page.status}</p>
	<p class="text-stone-500 dark:text-stone-400">{page.error?.message ?? 'Something went wrong.'}</p>
	<a
		href="/"
		class="mt-2 rounded-full bg-amber-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-800 dark:bg-amber-600 dark:text-stone-950 dark:hover:bg-amber-500"
	>
		Back to today's puzzle
	</a>
</div>
