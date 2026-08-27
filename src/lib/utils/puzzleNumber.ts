import type { Puzzle } from '$lib/types';

/** A puzzle's display number — its 1-based position in the master `puzzles` list. */
export function getPuzzleNumber(puzzles: Puzzle[], id: string): number {
	return puzzles.findIndex((p) => p.id === id) + 1;
}
