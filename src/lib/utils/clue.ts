/** Strip everything but letters and uppercase — so "Sea Otter" and "sea-otter" both match SEAOTTER. */
export function normalizeGuess(input: string): string {
	return input.toUpperCase().replace(/[^A-Z]/g, '');
}

export function checkGuess(guess: string, answer: string): boolean {
	return normalizeGuess(guess) === normalizeGuess(answer);
}
