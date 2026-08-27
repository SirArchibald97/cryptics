export type ClueType =
	| 'Anagram'
	| 'Double Definition'
	| 'Hidden Word'
	| 'Charade'
	| 'Container'
	| 'Homophone'
	| 'Deletion'
	| 'Reversal';

export type Difficulty = 'easy' | 'medium' | 'hard';

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
	clueType: ClueType;
	difficulty: Difficulty;
	/** Progressive hints, revealed one at a time, easiest-to-most-revealing last */
	hints: string[];
	explanation: {
		/** The exact substring of `clue` that acts as the definition */
		definition: string;
		/** Prose walkthrough of how the wordplay builds the answer */
		wordplay: string;
	};
}

export interface PuzzleRecord {
	status: 'solved' | 'revealed';
	hintsUsed: number;
	attempts: number;
	/** ISO timestamp of when this record was set */
	completedAt: string;
}

export type ProgressStore = Record<string, PuzzleRecord>;
