import { error } from '@sveltejs/kit';
import { puzzles } from '$lib/data/puzzles';
import { isUnlocked } from '$lib/utils/date';
import { getPuzzleNumber } from '$lib/utils/puzzleNumber';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const puzzle = puzzles.find((p) => p.id === params.id);
	if (!puzzle || !isUnlocked(puzzle)) {
		error(404, 'That puzzle doesn\'t exist yet.');
	}
	return { puzzle, number: getPuzzleNumber(puzzles, puzzle.id) };
};
