export type Difficulty = "easy" | "medium" | "hard";

export interface Puzzle {
	/** Route-safe slug, also the calendar date it unlocks — e.g. "2026-08-20" */
	id: string;
	/** ISO date (YYYY-MM-DD) the puzzle becomes playable */
	date: string;
	/** Sequential puzzle number, shown as "No. 42" */
	number: number;
	/** Full clue text including the enumeration, e.g. "Beethoven's broken cornea (7)" */
	clue: string;
	/** Solution, letters only, uppercase — no spaces or punctuation */
	answer: string;
	difficulty: Difficulty;

	/** Hints about different parts of the puzzle clue */
	hints: {
		indicator: string;
		fodder: string;
		definition: string;
	};
	explanation: string;
}

export interface PuzzleRecord {
	status: "solved" | "revealed";
	hintsUsed: number;
	attempts: number;
	/** ISO timestamp of when this record was set */
	completedAt: string;
}

export type ProgressStore = Record<string, PuzzleRecord>;
