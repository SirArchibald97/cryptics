import type { Puzzle } from "$lib/types";

export const puzzles: Puzzle[] = [
	{
		id: "2026-08-30",
		clue: "The heart of competition breaks people exponentially, however small. (6)",
		answer: "PETITE",
		hints: {
			indicator: ["The heart", "breaks"],
			fodder: ["competition", "exponentially"],
			definition: ["small"],
		},
		explanation:
			"'The heart' of 'competition' is 'petit' and the E from 'exponentially' on the end forms PETITE.",
	},
	{
		id: "2026-08-31",
		clue: "Homeowners normally hear pet noises when inside. (4)",
		answer: "MEOW",
		hints: {
			indicator: ["inside"],
			fodder: ["Homeowners"],
			definition: ["pet noises"],
		},
		explanation: "'Inside' signals a hidden word: 'homeowners' contains MEOW.",
	},
	{
		id: "2026-09-01",
		clue: "Crazy game, the crowd was huge! (4)",
		answer: "MEGA",
		hints: {
			indicator: ["Crazy"],
			fodder: ["game"],
			definition: ["huge"],
		},
		explanation: "'Crazy' indicates an anagram: 'game' becomes MEGA",
	},
	{
		id: "2026-09-02",
		clue: "Sweet treats make me so stressed I feel backwards! (8)",
		answer: "DESSERTS",
		hints: {
			indicator: ["backwards"],
			fodder: ["stressed"],
			definition: ["Sweet treats"],
		},
		explanation: "'backwards' signals a reversal: 'stressed' is the reverse of DESSERTS",
	},
	{
		id: "2026-09-03",
		clue: "Radio static gives me pain, I don't pretend! (5)",
		answer: "FEIGN",
		hints: {
			indicator: ["Radio"],
			fodder: ["pain"],
			definition: ["pretend"],
		},
		explanation: "'Radio' indicates sound: 'pain' sounds like FEIGN",
	},
	{
		id: "2026-09-04",
		clue: "The voices rant on. I'm not crazy, please talk to me! (12)",
		answer: "CONVERSATION",
		hints: {
			indicator: ["crazy"],
			fodder: ["voices rant on"],
			definition: ["talk"],
		},
		explanation: "'Crazy' signals an anagram: 'voices rant on' rearranges to CONVERSATION.",
	},
	{
		id: "2026-09-05",
		clue: "A soul found in a guitar enables a brilliant performance at Wembley. (5)",
		answer: "ARENA",
		hints: {
			indicator: ["found in"],
			fodder: ["guitar enables"],
			definition: ["Wembley"],
		},
		explanation:
			"'Found in' signals a hidden word: 'guitar enables' contains ARENA like Wembley.",
	},
	{
		id: "2026-09-06",
		clue: "Dad and Leo play golf, they return broken and defeated. (4)",
		answer: "DAFT",
		hints: {
			indicator: ["broken"],
			fodder: ["defeated"],
			definition: ["Dad"],
		},
		explanation: "'Broken' indicates a word split up: some letters in 'defeated' form DAFT",
	},
	{
		id: "2026-09-07",
		clue: "'I can only trade ten, pal', 'What on Earth, get outta here then!' (6)",
		answer: "PLANET",
		hints: {
			indicator: ["trade"],
			fodder: ["ten, pal"],
			definition: ["Earth"],
		},
		explanation: "'Trade' like swapping letters: 'ten, pal' rearranges to PLANET",
	},
	{
		id: "2026-09-08",
		clue: "Annie and Rosie are lead astray by Loki. He's Annie's nemesis I'm pretty sure. (5)",
		answer: "PAINS",
		hints: {
			indicator: ["lead astray"],
			fodder: ["Annie's nemesis I'm pretty sure"],
			definition: ["Annie and Rosie"],
		},
		explanation:
			"'Lead astray' points to intials being rearranged: the first letters of 'Annie's nemesis I'm pretty sure' rearranges into PAINS",
	},
	{
		id: "2026-09-09",
		clue: "Lasts not a full decennial, epilogue eventually ends with family. (7)",
		answer: "STALLEY",
		hints: {
			indicator: ["ends"],
			fodder: ["Lasts not a full decennial, epilogue eventually"],
			definition: ["family"],
		},
		explanation:
			"'Ends' means to take the last letters of 'Lasts not a full decennial, epilogue eventually', forming STALLEY",
	},
	{
		id: "2026-09-10",
		clue: "Your knighthood is being revoked, it's bizarre you got it as a dachshund. (6)",
		answer: "HOTDOG",
		hints: {
			indicator: ["revoked", "bizarre"],
			fodder: ["knighthood"],
			definition: ["dachshund"],
		},
		explanation:
			"'Revoked' and 'bizarre' signal a scramble: the letters in 'knighthood' can be used to spell HOTDOG",
	},
	{
		id: "2026-09-11",
		clue: "Detract double-o seven from MI6 and they would be put together, but to a lesser degree. They need a martini shaken, not stirred. (9)",
		answer: "DOCTORATE",
		hints: {
			indicator: ["shaken", "put together"],
			fodder: ["Detract double-o"],
			definition: ["degree"],
		},
		explanation:
			"'Shaken' and 'put together' indicates a scramble: 'Detract' plus 'double-o' forms DOCTORATE",
	},
	{
		id: "2026-09-12",
		clue: "The rich angelic voices contains notes, give them the coin. (6)",
		answer: "CHANGE",
		hints: {
			indicator: ["contains"],
			fodder: ["rich angelic"],
			definition: ["coin"],
		},
		explanation: "'contains' means to take the middle of 'rich angelic' making CHANGE",
	},
	{
		id: "2026-09-13",
		clue: "The Sound of Music can sound groovy to 1930 Austrian ears. (5)",
		answer: "MOVIE",
		hints: {
			indicator: ["sound"],
			fodder: ["groovy"],
			definition: ["The Sound of Music"],
		},
		explanation: "'Sound' points to a ryhme of 'groovy', 'The Sound of Music' is a MOVIE",
	},
	{
		id: "2026-09-14",
		clue: "Bearing fruit in the summer, hunger is darkened. (4)",
		answer: "TINT",
		hints: {
			indicator: ["Bearing"],
			fodder: ["fruit in the"],
			definition: ["darkened"],
		},
		explanation: "'Bearing' means take the middle of 'fruit in the' getting TINT",
	},
	{
		id: "2026-09-15",
		clue: "Wons village returns to beauty in the winter weather. (4)",
		answer: "SNOW",
		hints: {
			indicator: ["returns"],
			fodder: ["Wons"],
			definition: ["winter weather"],
		},
		explanation: "'Returns' signals a reversal: 'Wons' backwards gives SNOW.",
	},
	{
		id: "2026-09-16",
		clue: "Amy will join the crazy cat ladies, minus a fortress. (7)",
		answer: "CITADEL",
		hints: {
			indicator: ["crazy", "minus"],
			fodder: ["cat ladies", "a"],
			definition: ["fortress"],
		},
		explanation:
			"'Crazy' signals an anagram of 'cat ladies', 'minus' an 'a', to produce CITADEL",
	},
	{
		id: "2026-09-17",
		clue: "Odds of winning low, crazy but go persue. (6)",
		answer: "WOOING",
		hints: {
			indicator: ["Odds", "crazy"],
			fodder: ["of winning low"],
			definition: ["persue"],
		},
		explanation:
			"'Odds' means take ever odd letter from 'of winning low', 'crazy' then scrambles it into WOOING",
	},
	{
		id: "2026-09-18",
		clue: "Kiss radio, it brings me great joy. (5)",
		answer: "BLISS",
		hints: {
			indicator: ["radio"],
			fodder: ["Kiss"],
			definition: ["great joy"],
		},
		explanation: "'Radio' signals a homophone of 'kiss', 'great joy' is BLISS",
	},
	{
		id: "2026-09-19",
		clue: "Mummy's girl hiding in Dubai's lingerie. (7)",
		answer: "AISLING",
		hints: {
			indicator: ["hiding in"],
			fodder: ["Dubai's lingerie"],
			definition: ["Mummy"],
		},
		explanation:
			"'Hiding in' signals a hidden word: the middle of 'Dubai's lingerie' is AISLING",
	},
	{
		id: "2026-09-20",
		clue: "Aisling began to draw, but it didn't end up mainstream. (5)",
		answer: "DREAM",
		hints: {
			indicator: ["began", "end"],
			fodder: ["draw", "mainstream"],
			definition: ["Aisling"],
		},
		explanation:
			"'began' and 'end' takes the start of 'draw' and the end of 'mainstream' to form DREAM",
	},
	{
		id: "2026-09-21",
		clue: "Wicked advance by bear reveals fairy-tale nightmare. (4, 10)",
		answer: "EVIL STEPMOTHER",
		hints: {
			indicator: ["reveals"],
			fodder: ["Wicked advance", "bear"],
			definition: ["fairy-tale nightmare"],
		},
		explanation:
			"'reveals' indicates a hidden phrase within 'Wicked advance' and 'bear' creating a 'fairy-tale nightmare' EVIL STEPMOTHER",
	},
	{
		id: "2026-09-22",
		clue: "Calypso's island was wet and miserable. (7)",
		answer: "IRELAND",
		hints: {
			indicator: ["Calypso"],
			fodder: ["island"],
			definition: ["wet and miserable"],
		},
		explanation: "'Calypso' implies music and sound, 'island' is a homophone for IRELAND",
	},
	{
		id: "2026-09-23",
		clue: "You can't remove a Mae, she's just like you! (2)",
		answer: "ME",
		hints: {
			indicator: ["remove"],
			fodder: ["a Mae"],
			definition: ["you"],
		},
		explanation: "'remove' the 'a' from 'Mae' to get ME",
	},
	{
		id: "2026-09-24",
		clue: "Starting now, I may blank Loki everytime. He is just too fast! (6)",
		answer: "NIMBLE",
		hints: {
			indicator: ["Starting"],
			fodder: ["now, I may blank Loki everytime"],
			definition: ["fast"],
		},
		explanation:
			"'Starting' means to get the first letters of 'now, I may blank Loki everytime' to get NIMBLE",
	},
	{
		id: "2026-09-25",
		clue: "Shit, I heard you rejected them. (4)",
		answer: "OMIT",
		hints: {
			indicator: ["heard"],
			fodder: ["Shit"],
			definition: ["rejected"],
		},
		explanation: "'heard' signals a homophone of 'Shit' which means 'rejected' - OMIT",
	},
	{
		id: "2026-09-26",
		clue: "Shit, I heard you lost your bag? (3)",
		answer: "KIT",
		hints: {
			indicator: ["heard"],
			fodder: ["Shit"],
			definition: ["bag"],
		},
		explanation: "'heard' signals a homophone of 'Shit' which means 'bag' - KIT",
	},
	{
		id: "2026-09-27",
		clue: "Confused, broken, deluded men start firing bullets ferociously. (9)",
		answer: "BEFUDDLED",
		hints: {
			indicator: ["broken", "start"],
			fodder: ["deluded", "firing bullets ferociously"],
			definition: ["Confused"],
		},
		explanation:
			"'broken' indicates to break apart 'deluded' and add the 'start' letters of 'firing bullets ferociously' (FBF) to get BEFUDDLED",
	},
	{
		id: "2026-09-28",
		clue: "T-minus till Nessie gets the bug. (7)",
		answer: "ILLNESS",
		hints: {
			indicator: ["minus"],
			fodder: ["T", "till Nessie"],
			definition: ["bug"],
		},
		explanation:
			"'minus' signals to get rid of letters including 'T' from 'till Nessie' getting ILLNESS",
	},
];
