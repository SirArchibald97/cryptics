import type { Puzzle } from '$lib/types';

export const puzzles: Puzzle[] = [
	{
		id: '2026-08-27',
		date: '2026-08-27',
		number: 1,
		clue: 'Homeowners normally hear pet noises when inside. (4)',
		answer: 'MEOW',
		difficulty: 'medium',
		hints: {
			indicator: 'inside',
			fodder: 'Homeowners',
			definition: 'pet noises'
		},
		explanation: "'Inside' signals a hidden word: hoMEOWners contains MEOW."
	}
];
