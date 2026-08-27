/** Shared highlight colors for the three named hints, used both while playing
 *  (as each is revealed) and in the post-solve breakdown (all three at once). */
export const HINT_COLORS = {
	indicator: 'bg-purple-200/80 text-purple-900 dark:bg-purple-900/50 dark:text-purple-100',
	fodder: 'bg-yellow-200/80 text-yellow-900 dark:bg-yellow-900/50 dark:text-yellow-100',
	definition: 'bg-sky-200/80 text-sky-900 dark:bg-sky-900/50 dark:text-sky-100'
} as const;

export const HINT_LABELS = {
	indicator: 'Indicator',
	fodder: 'Fodder',
	definition: 'Definition'
} as const;

/** Solid dot colors for the small legend in the explanation panel. */
export const HINT_DOT_COLORS = {
	indicator: 'bg-purple-400 dark:bg-purple-500',
	fodder: 'bg-yellow-400 dark:bg-yellow-500',
	definition: 'bg-sky-400 dark:bg-sky-500'
} as const;
