<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-stone-50 dark:bg-stone-950">
	<Header />
	<main class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
		{@render children()}
	</main>
</div>
