import type { Puzzle } from '$lib/types';

export const puzzles: Puzzle[] = [
	{
		id: '2026-08-27',
		clue: 'The heart of competition, however small, breaks people exponentially. (6)',
		answer: 'PETITE',
		hints: {
			indicator: ['The heart', 'breaks'],
			fodder: ['competition', 'exponentially'],
			definition: ['small']
		},
		explanation:
			"'The heart' of 'competition' is 'petit' and the E from 'exponentially' on the end forms PETITE."
	},
	{
		id: '2026-08-28',
		clue: 'Homeowners normally hear pet noises when inside. (4)',
		answer: 'MEOW',
		hints: {
			indicator: ['inside'],
			fodder: ['Homeowners'],
			definition: ['pet noises']
		},
		explanation: "'Inside' signals a hidden word: 'homeowners' contains MEOW."
	},
	{
		id: '2026-08-29',
		clue: 'Crazy game, the crowd was huge! (4)',
		answer: 'MEGA',
		hints: {
			indicator: ['Crazy'],
			fodder: ['game'],
			definition: ['huge']
		},
		explanation: "'Crazy' indicates an anagram: 'game' becomes MEGA"
	},
	{
		id: '2026-08-30',
		clue: 'I am so stressed without a sweet treat, I feel backwards. (8)',
		answer: 'DESSERTS',
		hints: {
			indicator: ['backwards'],
			fodder: ['stressed'],
			definition: ['sweet treat']
		},
		explanation: "'backwards' signals a scramble: 'stressed' is an anagram for DESSERTS"
	},
	{
		id: '2026-08-31',
		clue: "Radio static does gives me pain, I don't pretend! (5)",
		answer: 'FEIGN',
		hints: {
			indicator: ['Radio'],
			fodder: ['pain'],
			definition: ['pretend']
		},
		explanation: "'Radio' indicates sound: 'pain' sounds like FEIGN"
	}
];
