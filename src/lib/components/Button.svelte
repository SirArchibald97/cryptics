<script lang="ts">
	import type { Snippet } from 'svelte';

	type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';

	let {
		variant = 'primary',
		type = 'button',
		disabled = false,
		onclick,
		class: className = '',
		children
	}: {
		variant?: Variant;
		type?: 'button' | 'submit';
		disabled?: boolean;
		onclick?: () => void;
		class?: string;
		children: Snippet;
	} = $props();

	const base =
		'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50';

	const variants: Record<Variant, string> = {
		primary:
			'bg-amber-700 text-white hover:bg-amber-800 dark:bg-amber-600 dark:text-stone-950 dark:hover:bg-amber-500',
		secondary:
			'bg-stone-200 text-stone-800 hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700',
		ghost:
			'text-stone-600 hover:bg-stone-200/60 dark:text-stone-300 dark:hover:bg-stone-800',
		danger:
			'bg-red-700 text-white hover:bg-red-800 dark:bg-red-600 dark:text-stone-950 dark:hover:bg-red-500'
	};
</script>

<button {type} {disabled} {onclick} class="{base} {variants[variant]} {className}">
	{@render children()}
</button>
