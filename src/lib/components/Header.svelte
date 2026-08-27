<script lang="ts">
	import { theme } from '$lib/stores/theme.svelte';
	import StatsModal from './StatsModal.svelte';
	import HowToPlayModal from './HowToPlayModal.svelte';

	let showStats = $state(false);
	let showHelp = $state(false);

	const iconBtn =
		'flex items-center justify-center rounded-full p-2 text-stone-600 transition hover:bg-stone-200/60 hover:text-stone-900 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-stone-50';
</script>

<header class="sticky top-0 z-30 border-b border-stone-200 bg-stone-50/90 backdrop-blur dark:border-stone-800 dark:bg-stone-950/90">
	<div class="mx-auto flex max-w-2xl items-center justify-between px-4 py-3 sm:px-6">
		<a href="/" class="font-display text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
			Cryptics
		</a>

		<nav class="flex items-center gap-1">
			<a href="/archive" class="{iconBtn} gap-1.5 px-3" aria-label="Archive">
				<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<rect x="3.5" y="5" width="17" height="15" rx="2.5" />
					<line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
					<line x1="8" y1="3" x2="8" y2="6.5" />
					<line x1="16" y1="3" x2="16" y2="6.5" />
				</svg>
				<span class="hidden text-sm font-medium sm:inline">Archive</span>
			</a>

			<button type="button" class={iconBtn} aria-label="Your stats" onclick={() => (showStats = true)}>
				<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<line x1="5" y1="20" x2="5" y2="12" />
					<line x1="12" y1="20" x2="12" y2="5" />
					<line x1="19" y1="20" x2="19" y2="15" />
				</svg>
			</button>

			<button type="button" class="{iconBtn} text-[13px] font-bold" aria-label="How to play" onclick={() => (showHelp = true)}>
				<span class="flex h-[18px] w-[18px] items-center justify-center rounded-full border-[1.5px] border-current">?</span>
			</button>

			<button type="button" class={iconBtn} aria-label="Toggle dark mode" onclick={() => theme.toggle()}>
				{#if theme.dark}
					<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
						<circle cx="12" cy="12" r="4" />
						<line x1="12" y1="2.5" x2="12" y2="5" />
						<line x1="12" y1="19" x2="12" y2="21.5" />
						<line x1="2.5" y1="12" x2="5" y2="12" />
						<line x1="19" y1="12" x2="21.5" y2="12" />
						<line x1="5.1" y1="5.1" x2="6.8" y2="6.8" />
						<line x1="17.2" y1="17.2" x2="18.9" y2="18.9" />
						<line x1="5.1" y1="18.9" x2="6.8" y2="17.2" />
						<line x1="17.2" y1="6.8" x2="18.9" y2="5.1" />
					</svg>
				{:else}
					<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
						<mask id="moon-cutout">
							<rect x="0" y="0" width="24" height="24" fill="white" />
							<circle cx="15.5" cy="9" r="6.5" fill="black" />
						</mask>
						<circle cx="12" cy="12" r="9" mask="url(#moon-cutout)" />
					</svg>
				{/if}
			</button>
		</nav>
	</div>
</header>

<StatsModal bind:open={showStats} />
<HowToPlayModal bind:open={showHelp} />
