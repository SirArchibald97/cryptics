<script lang="ts">
	import { untrack } from 'svelte';

	/**
	 * A row of single-letter boxes (Wordle/OTP-style) standing in for one guess.
	 * Typing a letter auto-advances focus to the next box; Backspace on an empty
	 * box steps back and clears the previous one.
	 */
	let {
		value = $bindable(''),
		length,
		shake = false,
		invalid = false,
		onSubmit
	}: {
		value?: string;
		length: number;
		shake?: boolean;
		invalid?: boolean;
		onSubmit?: () => void;
	} = $props();

	// `length` is fixed for this component's lifetime (the caller mounts a fresh
	// instance per puzzle), so the box count is only ever meant to be read once.
	const indices = untrack(() => Array.from({ length }, (_, i) => i));

	let letters = $state<string[]>(untrack(() => Array(length).fill('')));
	let boxes: (HTMLInputElement | null)[] = [];

	function sync() {
		value = letters.join('');
	}

	function sanitize(char: string): string {
		return char.toUpperCase().match(/[A-Z]/)?.[0] ?? '';
	}

	function focusBox(i: number) {
		const el = boxes[i];
		el?.focus();
		el?.select();
	}

	function handleInput(i: number, e: Event) {
		const target = e.currentTarget as HTMLInputElement;
		const char = sanitize(target.value.slice(-1));
		if (target.value !== char) target.value = char;
		letters[i] = char;
		sync();
		if (char && i < length - 1) focusBox(i + 1);
	}

	function handleKeydown(i: number, e: KeyboardEvent) {
		if (e.key === 'Enter') {
			onSubmit?.();
			return;
		}
		if (e.key === 'Backspace' && !letters[i] && i > 0) {
			e.preventDefault();
			letters[i - 1] = '';
			sync();
			focusBox(i - 1);
			return;
		}
		if (e.key === 'ArrowLeft' && i > 0) {
			e.preventDefault();
			focusBox(i - 1);
		}
		if (e.key === 'ArrowRight' && i < length - 1) {
			e.preventDefault();
			focusBox(i + 1);
		}
	}

	function handlePaste(i: number, e: ClipboardEvent) {
		e.preventDefault();
		const chars = (e.clipboardData?.getData('text') ?? '').split('').map(sanitize).filter(Boolean);
		let idx = i;
		for (const char of chars) {
			if (idx >= length) break;
			letters[idx] = char;
			idx++;
		}
		sync();
		focusBox(Math.min(idx, length - 1));
	}

	function handleFocus(e: FocusEvent) {
		(e.currentTarget as HTMLInputElement).select();
	}
</script>

<div class="flex flex-wrap justify-center gap-1.5 sm:gap-2 {shake ? 'animate-shake' : ''}">
	{#each indices as i (i)}
		<input
			bind:this={boxes[i]}
			type="text"
			inputmode="text"
			maxlength="1"
			autocomplete="off"
			autocapitalize="characters"
			spellcheck="false"
			aria-label="Letter {i + 1} of {length}"
			value={letters[i]}
			oninput={(e) => handleInput(i, e)}
			onkeydown={(e) => handleKeydown(i, e)}
			onpaste={(e) => handlePaste(i, e)}
			onfocus={handleFocus}
			class="h-11 w-8 shrink-0 rounded-lg border-2 text-center font-display text-lg font-bold text-stone-900 uppercase outline-none transition focus:border-amber-600 sm:h-14 sm:w-11 sm:text-2xl dark:text-stone-50 {invalid
				? 'border-red-400 bg-red-50 dark:border-red-600 dark:bg-red-950/40'
				: 'border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-800/60'}"
		/>
	{/each}
</div>
