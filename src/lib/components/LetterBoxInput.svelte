<script lang="ts">
	import { untrack } from 'svelte';

	/**
	 * A row of single-letter boxes (Wordle/OTP-style) standing in for one guess.
	 * Typing a letter auto-advances focus to the next box; Backspace on an empty
	 * box steps back and clears the previous one. Indices present in
	 * `lockedLetters` are pre-filled and non-editable (used for "reveal a
	 * letter" hints) — navigation skips over them.
	 *
	 * `wordLengths` splits the boxes into one row per word for multi-word
	 * answers (e.g. [4, 10] for "EVIL STEPMOTHER") — there's no box for the
	 * space itself, just a new line. Letter indices stay flat and contiguous
	 * across the whole answer regardless of the row breaks.
	 */
	let {
		value = $bindable(''),
		wordLengths,
		shake = false,
		invalid = false,
		lockedLetters = {},
		onSubmit
	}: {
		value?: string;
		wordLengths: number[];
		shake?: boolean;
		invalid?: boolean;
		lockedLetters?: Record<number, string>;
		onSubmit?: () => void;
	} = $props();

	// `wordLengths` is fixed for this component's lifetime (the caller mounts a
	// fresh instance per puzzle), so these are only ever meant to be read once.
	const length = untrack(() => wordLengths.reduce((a, b) => a + b, 0));
	const rows = untrack(() => {
		const result: number[][] = [];
		let start = 0;
		for (const wordLen of wordLengths) {
			result.push(Array.from({ length: wordLen }, (_, i) => start + i));
			start += wordLen;
		}
		return result;
	});

	let letters = $state<string[]>(untrack(() => Array(length).fill('')));
	let boxes: (HTMLInputElement | null)[] = [];

	// Keep locked boxes in sync whenever a new letter gets revealed.
	$effect(() => {
		let changed = false;
		for (const [key, letter] of Object.entries(lockedLetters)) {
			const idx = Number(key);
			if (letters[idx] !== letter) {
				letters[idx] = letter;
				changed = true;
			}
		}
		if (changed) sync();
	});

	function isLocked(i: number): boolean {
		return lockedLetters[i] !== undefined;
	}

	/** Next editable index at or after/before `from`, stepping in `dir`, clamped to bounds. */
	function nextFree(from: number, dir: 1 | -1): number {
		let i = from;
		while (i >= 0 && i < length && isLocked(i)) i += dir;
		return Math.min(Math.max(i, 0), length - 1);
	}

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
		if (char && i < length - 1) focusBox(nextFree(i + 1, 1));
	}

	function handleKeydown(i: number, e: KeyboardEvent) {
		if (e.key === 'Enter') {
			onSubmit?.();
			return;
		}
		if (e.key === 'Backspace' && !letters[i] && i > 0) {
			e.preventDefault();
			const prev = nextFree(i - 1, -1);
			letters[prev] = '';
			sync();
			focusBox(prev);
			return;
		}
		if (e.key === 'ArrowLeft' && i > 0) {
			e.preventDefault();
			focusBox(nextFree(i - 1, -1));
		}
		if (e.key === 'ArrowRight' && i < length - 1) {
			e.preventDefault();
			focusBox(nextFree(i + 1, 1));
		}
	}

	function handlePaste(i: number, e: ClipboardEvent) {
		e.preventDefault();
		const chars = (e.clipboardData?.getData('text') ?? '').split('').map(sanitize).filter(Boolean);
		let idx = i;
		for (const char of chars) {
			while (idx < length && isLocked(idx)) idx++;
			if (idx >= length) break;
			letters[idx] = char;
			idx++;
		}
		sync();
		focusBox(nextFree(Math.min(idx, length - 1), 1));
	}

	function handleFocus(e: FocusEvent) {
		(e.currentTarget as HTMLInputElement).select();
	}
</script>

<div class="flex flex-col items-center gap-2 {shake ? 'animate-shake' : ''}">
	{#each rows as row, rowIndex (rowIndex)}
		<div class="flex flex-wrap justify-center gap-1.5 sm:gap-2">
			{#each row as i (i)}
				<input
					bind:this={boxes[i]}
					type="text"
					inputmode="text"
					maxlength="1"
					autocomplete="off"
					autocapitalize="characters"
					spellcheck="false"
					disabled={isLocked(i)}
					aria-label="Letter {i + 1} of {length}"
					value={letters[i]}
					oninput={(e) => handleInput(i, e)}
					onkeydown={(e) => handleKeydown(i, e)}
					onpaste={(e) => handlePaste(i, e)}
					onfocus={handleFocus}
					class="h-11 w-8 shrink-0 rounded-lg border-2 text-center font-display text-lg font-bold uppercase outline-none transition sm:h-14 sm:w-11 sm:text-2xl disabled:opacity-100 {isLocked(
						i
					)
						? 'border-amber-400 bg-amber-100 text-amber-800 dark:border-amber-600 dark:bg-amber-950/50 dark:text-amber-200'
						: invalid
							? 'border-red-400 bg-red-50 text-stone-900 focus:border-amber-600 dark:border-red-600 dark:bg-red-950/40 dark:text-stone-50'
							: 'border-stone-200 bg-stone-50 text-stone-900 focus:border-amber-600 dark:border-stone-700 dark:bg-stone-800/60 dark:text-stone-50'}"
				/>
			{/each}
		</div>
	{/each}
</div>
