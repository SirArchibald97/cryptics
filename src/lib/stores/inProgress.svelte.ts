import { browser } from '$app/environment';
import { untrack } from 'svelte';

const STORAGE_KEY = 'cryptics:inprogress:v1';

export interface HintFlags {
	indicator: boolean;
	fodder: boolean;
	definition: boolean;
}

export interface InProgressState {
	hintFlags: HintFlags;
	/** Index -> revealed letter, for boxes filled in by the "reveal a letter" hint. */
	lockedLetters: Record<number, string>;
	attempts: number;
}

type Store = Record<string, InProgressState>;

function loadInitial(): Store {
	if (!browser) return {};
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? (JSON.parse(raw) as Store) : {};
	} catch {
		return {};
	}
}

let states = $state<Store>(loadInitial());

function persist() {
	if (!browser) return;
	try {
		// Read `states` untracked: `saveInProgress`/`clearInProgress` are called from inside
		// PuzzleGame's $effect, and without this, JSON.stringify's deep read of `states` gets
		// attributed as a dependency of that *same* effect — which just wrote to `states` — so
		// the effect immediately reschedules itself and loops forever, freezing the tab.
		const json = untrack(() => JSON.stringify(states));
		localStorage.setItem(STORAGE_KEY, json);
	} catch {
		// localStorage unavailable (private mode, quota, etc.) — progress just won't persist.
	}
}

export function getInProgress(id: string): InProgressState | undefined {
	return states[id];
}

/** Called on every hint/attempt change while a puzzle is still being played. */
export function saveInProgress(id: string, state: InProgressState) {
	states[id] = state;
	persist();
}

/** Called once a puzzle is solved or revealed — its scratch state is no longer needed. */
export function clearInProgress(id: string) {
	if (!(id in states)) return;
	delete states[id];
	persist();
}
