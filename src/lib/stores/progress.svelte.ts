import { browser } from '$app/environment';
import type { ProgressStore, PuzzleRecord } from '$lib/types';
import { puzzles } from '$lib/data/puzzles';
import { isUnlocked, unlockedPuzzles } from '$lib/utils/date';

const STORAGE_KEY = 'cryptics:progress:v1';

function loadInitial(): ProgressStore {
	if (!browser) return {};
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? (JSON.parse(raw) as ProgressStore) : {};
	} catch {
		return {};
	}
}

let records = $state<ProgressStore>(loadInitial());

function persist() {
	if (!browser) return;
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
	} catch {
		// localStorage unavailable (private mode, quota, etc.) — progress just won't persist.
	}
}

export function getRecord(id: string): PuzzleRecord | undefined {
	return records[id];
}

function setRecord(id: string, status: PuzzleRecord['status'], hintsUsed: number, attempts: number) {
	// A puzzle already solved stays solved even if replayed.
	if (records[id]?.status === 'solved') return;
	records[id] = { status, hintsUsed, attempts, completedAt: new Date().toISOString() };
	persist();
}

export function recordSolve(id: string, hintsUsed: number, attempts: number) {
	setRecord(id, 'solved', hintsUsed, attempts);
}

export function recordReveal(id: string, hintsUsed: number, attempts: number) {
	setRecord(id, 'revealed', hintsUsed, attempts);
}

function currentStreak(): number {
	let streak = 0;
	for (const p of unlockedPuzzles(puzzles)) {
		if (records[p.id]?.status === 'solved') streak++;
		else break;
	}
	return streak;
}

function maxStreak(): number {
	const ascending = puzzles.filter((p) => isUnlocked(p)).slice().sort((a, b) => (a.date < b.date ? -1 : 1));
	let max = 0;
	let run = 0;
	for (const p of ascending) {
		if (records[p.id]?.status === 'solved') {
			run++;
			max = Math.max(max, run);
		} else {
			run = 0;
		}
	}
	return max;
}

export const stats = {
	get played() {
		return Object.keys(records).length;
	},
	get solved() {
		return Object.values(records).filter((r) => r.status === 'solved').length;
	},
	get winPercent() {
		return this.played === 0 ? 0 : Math.round((this.solved / this.played) * 100);
	},
	get currentStreak() {
		return currentStreak();
	},
	get maxStreak() {
		return maxStreak();
	}
};
