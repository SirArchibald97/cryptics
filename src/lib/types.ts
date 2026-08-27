export interface Puzzle {
	/** ISO date (YYYY-MM-DD) — doubles as the route slug and the day it unlocks, e.g. "2026-08-20" */
	id: string;
	/** Full clue text including the enumeration, e.g. "Beethoven's broken cornea (7)" */
	clue: string;
	/** Solution, letters only, uppercase — no spaces or punctuation */
	answer: string;

	/** Hints about different parts of the puzzle clue */
	hints: {
		indicator: string[];
		fodder: string[];
		definition: string[];
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
