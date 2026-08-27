import { browser } from '$app/environment';
import { untrack } from 'svelte';
import type { ProgressStore, PuzzleRecord } from '$lib/types';
import { puzzles } from '$lib/data/puzzles';

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
		// Untracked so that if a future caller ever writes a record from inside an $effect,
		// this deep read of `records` doesn't get attributed as a dependency of that same
		// effect and cause it to loop on itself.
		const json = untrack(() => JSON.stringify(records));
		localStorage.setItem(STORAGE_KEY, json);
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

export const stats = {
	get played() {
		return Object.keys(records).length;
	},
	get solved() {
		return Object.values(records).filter((r) => r.status === 'solved').length;
	},
	get total() {
		return puzzles.length;
	},
	/** True once every puzzle on the calendar has been played (solved or revealed). */
	get complete() {
		return puzzles.every((p) => !!records[p.id]);
	}
};
