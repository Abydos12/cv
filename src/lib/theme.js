import { writable } from 'svelte/store';

export const prefersDarkTheme = () =>
	localStorage.theme === 'dark' ||
	(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

export const theme = writable(localStorage.theme);
