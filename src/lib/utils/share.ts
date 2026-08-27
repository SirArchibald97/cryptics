import type { Puzzle, PuzzleRecord } from '$lib/types';

/** Builds a Wordle-style share string: one pip per hint used, plus a result pip. */
export function buildShareText(puzzle: Puzzle, record: PuzzleRecord): string {
	const pips = record.hintsUsed > 0 ? '🟨'.repeat(record.hintsUsed) : '⬜';
	const result = record.status === 'solved' ? '🟩' : '🟥';
	return `Cryptics #${puzzle.number}\n${pips}${result}`;
}

export async function copyToClipboard(text: string): Promise<boolean> {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		return false;
	}
}
