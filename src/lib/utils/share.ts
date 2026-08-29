import type { Puzzle, PuzzleRecord } from "$lib/types";

/** Builds a Wordle-style share string: one pip per hint used, plus a result pip. */
export function buildShareText(number: number, puzzle: Puzzle, record: PuzzleRecord): string {
	return `Cryptics #${number} - ${puzzle.clue}\n${record.status.toUpperCase()}: ${record.attempts} attempts, ${record.hintsUsed} hints`;
}

export async function copyToClipboard(text: string): Promise<boolean> {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		return false;
	}
}
