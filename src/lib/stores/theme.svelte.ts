import { browser } from '$app/environment';

const KEY = 'cryptics:theme';

function loadInitial(): boolean {
	if (!browser) return false;
	try {
		const stored = localStorage.getItem(KEY);
		if (stored) return stored === 'dark';
	} catch {
		// ignore
	}
	return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
}

let dark = $state(loadInitial());

function apply() {
	if (!browser) return;
	document.documentElement.classList.toggle('dark', dark);
	try {
		localStorage.setItem(KEY, dark ? 'dark' : 'light');
	} catch {
		// ignore
	}
}

export const theme = {
	get dark() {
		return dark;
	},
	toggle() {
		dark = !dark;
		apply();
	}
};
