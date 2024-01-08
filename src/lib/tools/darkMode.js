import { writable } from 'svelte/store';

export const modes = [
	{ name: 'light', symbol: '🌕' },
	{ name: 'dark', symbol: '🌑' },
	{ name: 'system', symbol: ' 🌓' }
];

export const mode = writable(getDefaultMode());

function getDefaultMode() {
	if (!('theme' in localStorage)) {
		return 'system';
	} else {
		return localStorage.theme;
	}
}

export function applyMode(m) {
	mode.set(m);
	if (m === 'system') {
		localStorage.removeItem('theme');
	} else {
		localStorage.setItem('theme', m);
	}
}

mode.subscribe(m => {
	if (
		m === 'dark' ||
		(m === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
})