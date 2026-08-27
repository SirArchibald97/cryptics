import type { Puzzle } from '$lib/types';

/**
 * Test/seed data — original clues written for development purposes.
 * Replace or extend this file with real puzzles; each entry is self-contained.
 *
 * `date`/`number` control calendar-day order (which door on the calendar this
 * is, and when it unlocks) — deliberately shuffled here rather than matching
 * clue-type order, so the reveal order feels random rather than patterned.
 * Exactly 30 days, 2026-08-11 through 2026-09-09 — a clean 5x6/6x5 grid.
 * Dates run up to and slightly past "today" so the calendar's locked doors
 * and streak logic have real data to show.
 */
export const puzzles: Puzzle[] = [
	{
		id: '2026-08-11',
		date: '2026-08-11',
		number: 1,
		clue: 'Stadium found in guitar enables performance (5)',
		answer: 'ARENA',
		clueType: 'Hidden Word',
		difficulty: 'medium',
		hints: [
			'This is a hidden word clue — the answer sits inside consecutive letters of the clue.',
			"The definition is 'Stadium'.",
			"Look for the indicator 'found in', then read across the join between two words.",
			'The answer starts with A.'
		],
		explanation: {
			definition: 'Stadium',
			wordplay: "'Found in' signals a hidden word: guit-AR-ENA-bles contains ARENA."
		}
	},
	{
		id: '2026-08-12',
		date: '2026-08-12',
		number: 2,
		clue: 'Perfect, as found within solid Ealing plan (5)',
		answer: 'IDEAL',
		clueType: 'Hidden Word',
		difficulty: 'medium',
		hints: [
			'This is a hidden word clue.',
			"The definition is 'Perfect', at the start of the clue.",
			"Read straight across the join of 'solid Ealing'.",
			'The answer starts with I.'
		],
		explanation: {
			definition: 'Perfect',
			wordplay: "Hidden across the words: sol-IDEAL-ing gives IDEAL."
		}
	},
	{
		id: '2026-08-13',
		date: '2026-08-13',
		number: 3,
		clue: "Slender, without small size initially: illumination (5)",
		answer: 'LIGHT',
		clueType: 'Deletion',
		difficulty: 'hard',
		hints: [
			'This is a deletion clue — a letter or letters are removed from a longer word.',
			"The definition is 'illumination', at the end of the clue.",
			"'Small' abbreviates to S; take it off the front of a word meaning 'slender'.",
			'The answer starts with L.'
		],
		explanation: {
			definition: 'illumination',
			wordplay: "SLIGHT (slender) loses its initial S (short for 'small') to leave LIGHT."
		}
	},
	{
		id: '2026-08-14',
		date: '2026-08-14',
		number: 4,
		clue: 'Trouble, minus bishop, describes an alternative (5)',
		answer: 'OTHER',
		clueType: 'Deletion',
		difficulty: 'hard',
		hints: [
			'This is a deletion clue.',
			"The definition is 'an alternative', at the end of the clue.",
			"'Bishop' abbreviates to B in chess notation — remove it from a word meaning 'trouble'.",
			'The answer starts with O.'
		],
		explanation: {
			definition: 'an alternative',
			wordplay: "BOTHER (trouble) loses its B (Bishop), leaving OTHER."
		}
	},
	{
		id: '2026-08-15',
		date: '2026-08-15',
		number: 5,
		clue: 'Listen, confused, and stay quiet (6)',
		answer: 'SILENT',
		clueType: 'Anagram',
		difficulty: 'easy',
		hints: [
			"This is an anagram clue — one word is a scrambled version of another.",
			"The definition is 'stay quiet', at the end of the clue.",
			"'Confused' is the anagram indicator. The fodder is 'LISTEN' — rearrange its letters.",
			'The answer starts with S.'
		],
		explanation: {
			definition: 'stay quiet',
			wordplay: "'Confused' signals an anagram. Rearranging the letters of LISTEN gives SILENT."
		}
	},
	{
		id: '2026-08-16',
		date: '2026-08-16',
		number: 6,
		clue: 'Love found within tornado recovery efforts (5)',
		answer: 'ADORE',
		clueType: 'Hidden Word',
		difficulty: 'medium',
		hints: [
			'This is a hidden word clue.',
			"The definition is 'Love', at the start of the clue.",
			"Read across the join of 'tornado recovers'.",
			'The answer starts with A.'
		],
		explanation: {
			definition: 'Love',
			wordplay: 'Hidden across the words: torn-ADORE-covers gives ADORE.'
		}
	},
	{
		id: '2026-08-17',
		date: '2026-08-17',
		number: 7,
		clue: "Number system emerges when 'claimed' is rearranged (7)",
		answer: 'DECIMAL',
		clueType: 'Anagram',
		difficulty: 'medium',
		hints: [
			'This is an anagram clue.',
			"The definition is 'Number system', at the start of the clue.",
			"'Rearranged' is the indicator. The fodder is 'CLAIMED'.",
			'The answer starts with D.'
		],
		explanation: {
			definition: 'Number system',
			wordplay: "'Rearranged' signals an anagram of CLAIMED, giving DECIMAL."
		}
	},
	{
		id: '2026-08-18',
		date: '2026-08-18',
		number: 8,
		clue: 'Vehicle and pet cover the floor (6)',
		answer: 'CARPET',
		clueType: 'Charade',
		difficulty: 'easy',
		hints: [
			'This is a charade clue — the answer is built from smaller words placed end to end.',
			"The definition is 'cover the floor'.",
			"Combine a word for 'vehicle' with a word for 'pet'.",
			'The answer starts with C.'
		],
		explanation: {
			definition: 'cover the floor',
			wordplay: 'CAR (vehicle) + PET (pet), placed end to end, gives CARPET.'
		}
	},
	{
		id: '2026-08-19',
		date: '2026-08-19',
		number: 9,
		clue: 'Easily broken: cloth found inside a document (7)',
		answer: 'FRAGILE',
		clueType: 'Container',
		difficulty: 'hard',
		hints: [
			'This is a container clue.',
			"The definition is 'Easily broken', at the start of the clue.",
			"A tatty piece of cloth sits inside a word for a document.",
			'The answer starts with F.'
		],
		explanation: {
			definition: 'Easily broken',
			wordplay: 'RAG (cloth) inserted inside FILE (document): F-RAG-ILE gives FRAGILE.'
		}
	},
	{
		id: '2026-08-20',
		date: '2026-08-20',
		number: 10,
		clue: 'Fruit, we hear, comes in twos (4)',
		answer: 'PAIR',
		clueType: 'Homophone',
		difficulty: 'easy',
		hints: [
			'This is a homophone clue — the answer sounds like another word.',
			"The definition is 'comes in twos'.",
			"'We hear' signals a homophone of a common fruit.",
			'The answer starts with P.'
		],
		explanation: {
			definition: 'comes in twos',
			wordplay: "'We hear' indicates a homophone: PEAR (fruit) sounds like PAIR."
		}
	},
	{
		id: '2026-08-21',
		date: '2026-08-21',
		number: 11,
		clue: 'Enraged nobleman, oddly (7)',
		answer: 'GRANDEE',
		clueType: 'Anagram',
		difficulty: 'medium',
		hints: [
			'This is an anagram clue.',
			"The definition is 'nobleman', at the end of the clue.",
			"'Oddly' is the indicator. The fodder is 'ENRAGED'.",
			'The answer starts with G.'
		],
		explanation: {
			definition: 'nobleman',
			wordplay: "'Oddly' signals an anagram of ENRAGED, giving GRANDEE."
		}
	},
	{
		id: '2026-08-22',
		date: '2026-08-22',
		number: 12,
		clue: 'Fixed contest (5)',
		answer: 'MATCH',
		clueType: 'Double Definition',
		difficulty: 'easy',
		hints: [
			'This is a double definition clue — two short definitions, no wordplay.',
			"The whole clue is the definition, split in two: 'fixed' and 'contest'.",
			"Think of a sporting term that can also mean 'rigged'.",
			'The answer starts with M.'
		],
		explanation: {
			definition: 'Fixed contest',
			wordplay:
				"A double definition: 'fixed' (as in rigged or arranged) and 'contest' can both mean MATCH."
		}
	},
	{
		id: '2026-08-23',
		date: '2026-08-23',
		number: 13,
		clue: 'Turn left, perhaps, or where you keep your money (4)',
		answer: 'BANK',
		clueType: 'Double Definition',
		difficulty: 'medium',
		hints: [
			'This is a double definition clue.',
			"Both halves of the clue define the same word — think of an aircraft manoeuvre.",
			"...and a place that holds your savings.",
			'The answer starts with B.'
		],
		explanation: {
			definition: 'Turn left, perhaps, or where you keep your money',
			wordplay:
				"A double definition: to 'bank' is to tilt/turn (as a plane does), and a bank is also where you keep money."
		}
	},
	{
		id: '2026-08-24',
		date: '2026-08-24',
		number: 14,
		clue: "Road within the outer limits of 'part': a world (6)",
		answer: 'PLANET',
		clueType: 'Container',
		difficulty: 'medium',
		hints: [
			'This is a container clue — one chunk of letters is inserted inside another.',
			"The definition is 'a world', at the end of the clue.",
			"'Road' is a synonym placed inside the first and last letters of PART.",
			'The answer starts with P.'
		],
		explanation: {
			definition: 'a world',
			wordplay: "LANE (road) inserted inside the outer letters of PART (P _ T) gives PLANET."
		}
	},
	{
		id: '2026-08-25',
		date: '2026-08-25',
		number: 15,
		clue: 'Tale, or a level of a building (5)',
		answer: 'STORY',
		clueType: 'Double Definition',
		difficulty: 'easy',
		hints: [
			'This is a double definition clue.',
			'One meaning is a tale...',
			'...the other is a floor of a building.',
			'The answer starts with S.'
		],
		explanation: {
			definition: 'Tale, or a level of a building',
			wordplay: 'A double definition: STORY can mean a tale, or a floor/level of a building.'
		}
	},
	{
		id: '2026-08-26',
		date: '2026-08-26',
		number: 16,
		clue: "Sounds like it comes in installments, but it's breakfast food (6)",
		answer: 'CEREAL',
		clueType: 'Homophone',
		difficulty: 'medium',
		hints: [
			'This is a homophone clue.',
			"The definition is 'breakfast food', at the end of the clue.",
			"It sounds like a word for something published in installments.",
			'The answer starts with C.'
		],
		explanation: {
			definition: 'breakfast food',
			wordplay: "'Sounds like' indicates a homophone: SERIAL (in installments) sounds like CEREAL."
		}
	},
	{
		id: '2026-08-27',
		date: '2026-08-27',
		number: 17,
		clue: "Containers, we're told, come from reversing a red-light instruction (4)",
		answer: 'POTS',
		clueType: 'Reversal',
		difficulty: 'easy',
		hints: [
			'This is a reversal clue — read another word backwards.',
			"The definition is 'Containers', at the start of the clue.",
			"The red-light instruction is a common four-letter word — reverse it.",
			'The answer starts with P.'
		],
		explanation: {
			definition: 'Containers',
			wordplay: "STOP, a red-light instruction, reversed, gives POTS."
		}
	},
	{
		id: '2026-08-28',
		date: '2026-08-28',
		number: 18,
		clue: 'Prize found by reversing a piece of furniture (6)',
		answer: 'REWARD',
		clueType: 'Reversal',
		difficulty: 'medium',
		hints: [
			'This is a reversal clue.',
			"The definition is 'Prize', at the start of the clue.",
			'A piece of bedroom furniture with a sliding compartment, read backwards.',
			'The answer starts with R.'
		],
		explanation: {
			definition: 'Prize',
			wordplay: "DRAWER (furniture) reversed gives REWARD."
		}
	},
	{
		id: '2026-08-29',
		date: '2026-08-29',
		number: 19,
		clue: "Insect's direct route (7)",
		answer: 'BEELINE',
		clueType: 'Charade',
		difficulty: 'medium',
		hints: [
			'This is a charade clue.',
			"The definition is 'direct route', at the end of the clue.",
			'A buzzing insect, plus a word for a route or track.',
			'The answer starts with B.'
		],
		explanation: {
			definition: 'direct route',
			wordplay: 'BEE (insect) + LINE (route) gives BEELINE.'
		}
	},
	{
		id: '2026-08-30',
		date: '2026-08-30',
		number: 20,
		clue: 'Impressive: fled inside the extremes of a deity (5)',
		answer: 'GRAND',
		clueType: 'Container',
		difficulty: 'hard',
		hints: [
			'This is a container clue.',
			"The definition is 'Impressive', at the start of the clue.",
			"A word for 'fled' sits inside the outer letters of GOD.",
			'The answer starts with G.'
		],
		explanation: {
			definition: 'Impressive',
			wordplay: 'RAN (fled) inserted inside the outer letters of GOD (G _ D) gives GRAND.'
		}
	},
	{
		id: '2026-08-31',
		date: '2026-08-31',
		number: 21,
		clue: 'Just, or pleasant (4)',
		answer: 'FAIR',
		clueType: 'Double Definition',
		difficulty: 'easy',
		hints: [
			'This is a double definition clue.',
			'One meaning is even-handed, or just...',
			'...the other is pleasant, as in fair weather.',
			'The answer starts with F.'
		],
		explanation: {
			definition: 'Just, or pleasant',
			wordplay: 'A double definition: FAIR can mean just/even-handed, or pleasant.'
		}
	},
	{
		id: '2026-09-01',
		date: '2026-09-01',
		number: 22,
		clue: 'Fossilized resin found in cream berries recipe (5)',
		answer: 'AMBER',
		clueType: 'Hidden Word',
		difficulty: 'medium',
		hints: [
			'This is a hidden word clue.',
			"The definition is 'Fossilized resin', at the start of the clue.",
			"Read across the join of 'cream berries'.",
			'The answer starts with A.'
		],
		explanation: {
			definition: 'Fossilized resin',
			wordplay: 'Hidden across the words: cre-AMBER-ries gives AMBER.'
		}
	},
	{
		id: '2026-09-02',
		date: '2026-09-02',
		number: 23,
		clue: 'Vehicle, minus right, is finished (4)',
		answer: 'OVER',
		clueType: 'Deletion',
		difficulty: 'medium',
		hints: [
			'This is a deletion clue.',
			"The definition is 'finished', at the end of the clue.",
			"'Right' abbreviates to R; remove it from a word for a vehicle.",
			'The answer starts with O.'
		],
		explanation: {
			definition: 'finished',
			wordplay: "ROVER (vehicle) loses its R (Right), leaving OVER."
		}
	},
	{
		id: '2026-09-03',
		date: '2026-09-03',
		number: 24,
		clue: 'Limb, plus a certain amount, looks attractive (8)',
		answer: 'HANDSOME',
		clueType: 'Charade',
		difficulty: 'easy',
		hints: [
			'This is a charade clue.',
			"The definition is 'looks attractive', at the end of the clue.",
			'A body part, plus a word meaning an unspecified quantity.',
			'The answer starts with H.'
		],
		explanation: {
			definition: 'looks attractive',
			wordplay: 'HAND (limb) + SOME (a certain amount) gives HANDSOME.'
		}
	},
	{
		id: '2026-09-04',
		date: '2026-09-04',
		number: 25,
		clue: "Stop pedal, we're told, is a pause (5)",
		answer: 'BREAK',
		clueType: 'Homophone',
		difficulty: 'easy',
		hints: [
			'This is a homophone clue.',
			"The definition is 'a pause', at the end of the clue.",
			"'We're told' signals a homophone of a part of a car.",
			'The answer starts with B.'
		],
		explanation: {
			definition: 'a pause',
			wordplay: "'We're told' indicates a homophone: BRAKE (stop pedal) sounds like BREAK."
		}
	},
	{
		id: '2026-09-05',
		date: '2026-09-05',
		number: 26,
		clue: 'Stapler, rearranged, covers a wound (7)',
		answer: 'PLASTER',
		clueType: 'Anagram',
		difficulty: 'medium',
		hints: [
			'This is an anagram clue.',
			"The definition is 'covers a wound', at the end of the clue.",
			"'Rearranged' is the indicator. The fodder is 'STAPLER'.",
			'The answer starts with P.'
		],
		explanation: {
			definition: 'covers a wound',
			wordplay: "'Rearranged' signals an anagram of STAPLER, giving PLASTER."
		}
	},
	{
		id: '2026-09-06',
		date: '2026-09-06',
		number: 27,
		clue: 'Plant by the water is a woodland animal, reversed (4)',
		answer: 'REED',
		clueType: 'Reversal',
		difficulty: 'medium',
		hints: [
			'This is a reversal clue.',
			"The definition is 'Plant by the water', at the start of the clue.",
			'A woodland animal, read backwards.',
			'The answer starts with R.'
		],
		explanation: {
			definition: 'Plant by the water',
			wordplay: 'DEER (woodland animal) reversed gives REED.'
		}
	},
	{
		id: '2026-09-07',
		date: '2026-09-07',
		number: 28,
		clue: 'Earth, rearranged, is where feelings come from (5)',
		answer: 'HEART',
		clueType: 'Anagram',
		difficulty: 'easy',
		hints: [
			'This is an anagram clue.',
			"The definition is 'where feelings come from', at the end of the clue.",
			"'Rearranged' is the indicator. The fodder is 'EARTH'.",
			'The answer starts with H.'
		],
		explanation: {
			definition: 'where feelings come from',
			wordplay: "'Rearranged' signals an anagram of EARTH, giving HEART."
		}
	},
	{
		id: '2026-09-08',
		date: '2026-09-08',
		number: 29,
		clue: 'Cut of meat: hot drink trapped within the extremes of illness (5)',
		answer: 'STEAK',
		clueType: 'Container',
		difficulty: 'medium',
		hints: [
			'This is a container clue.',
			"The definition is 'Cut of meat', at the start of the clue.",
			'A hot drink sits inside the outer letters of SICK.',
			'The answer starts with S.'
		],
		explanation: {
			definition: 'Cut of meat',
			wordplay: 'TEA (hot drink) inserted inside the outer letters of SICK (S _ K) gives STEAK.'
		}
	},
	{
		id: '2026-09-09',
		date: '2026-09-09',
		number: 30,
		clue: 'Puddings are worry, reversed (8)',
		answer: 'DESSERTS',
		clueType: 'Reversal',
		difficulty: 'medium',
		hints: [
			'This is a reversal clue.',
			"The definition is 'Puddings', at the start of the clue.",
			'A word for worry or anxiety, read backwards.',
			'The answer starts with D.'
		],
		explanation: {
			definition: 'Puddings',
			wordplay: 'STRESSED (worry), reversed, gives DESSERTS.'
		}
	}
];
