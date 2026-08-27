import type { Puzzle } from '$lib/types';

/** Today's date as YYYY-MM-DD, in the local timezone. */
export function todayIso(): string {
	const now = new Date();
	const y = now.getFullYear();
	const m = String(now.getMonth() + 1).padStart(2, '0');
	const d = String(now.getDate()).padStart(2, '0');
	return `${y}-${m}-${d}`;
}

/** A puzzle is playable once its date has arrived. */
export function isUnlocked(puzzle: Puzzle, today = todayIso()): boolean {
	return puzzle.date <= today;
}

/** The most recent unlocked puzzle — i.e. "today's" puzzle. */
export function getTodaysPuzzle(puzzles: Puzzle[], today = todayIso()): Puzzle | undefined {
	const unlocked = puzzles.filter((p) => isUnlocked(p, today));
	if (unlocked.length === 0) return undefined;
	return unlocked.reduce((latest, p) => (p.date > latest.date ? p : latest));
}

/** All unlocked puzzles, most recent first. */
export function unlockedPuzzles(puzzles: Puzzle[], today = todayIso()): Puzzle[] {
	return puzzles
		.filter((p) => isUnlocked(p, today))
		.slice()
		.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function formatDate(iso: string): string {
	const [y, m, d] = iso.split('-').map(Number);
	const date = new Date(y, m - 1, d);
	return date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
}

export function formatDateLong(iso: string): string {
	const [y, m, d] = iso.split('-').map(Number);
	const date = new Date(y, m - 1, d);
	return date.toLocaleDateString(undefined, {
		weekday: 'long',
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
}
