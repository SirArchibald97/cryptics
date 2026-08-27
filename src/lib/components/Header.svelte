<script lang="ts">
	import { theme } from '$lib/stores/theme.svelte';
	import HowToPlayModal from './HowToPlayModal.svelte';

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
			<button type="button" class="{iconBtn} text-[13px] font-bold" aria-label="How to play" onclick={() => (showHelp = true)}>
				<span class="flex h-4.5 w-4.5 items-center justify-center rounded-full border-[1.5px] border-current">?</span>
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

<HowToPlayModal bind:open={showHelp} />
