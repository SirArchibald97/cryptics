export interface HighlightSpec {
	text: string;
	className: string;
}

export interface ClueSegment {
	text: string;
	className?: string;
}

/**
 * Splits `clue` into segments, applying each active highlight's class to the
 * first case-insensitive match of its text. Highlights are expected not to
 * overlap; if two matches do overlap, the earlier one wins and the later one
 * is skipped rather than corrupting the split.
 */
export function highlightClue(clue: string, highlights: HighlightSpec[]): ClueSegment[] {
	const lowerClue = clue.toLowerCase();

	const matches = highlights
		.map((h) => {
			const start = lowerClue.indexOf(h.text.toLowerCase());
			return start === -1 ? null : { start, end: start + h.text.length, className: h.className };
		})
		.filter((m): m is { start: number; end: number; className: string } => m !== null)
		.sort((a, b) => a.start - b.start);

	const segments: ClueSegment[] = [];
	let cursor = 0;
	for (const m of matches) {
		if (m.start < cursor) continue;
		if (m.start > cursor) segments.push({ text: clue.slice(cursor, m.start) });
		segments.push({ text: clue.slice(m.start, m.end), className: m.className });
		cursor = m.end;
	}
	if (cursor < clue.length) segments.push({ text: clue.slice(cursor) });

	return segments;
}
