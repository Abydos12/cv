/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			blur: {
				xs: '2px',
			},
			backgroundImage: {
				'dark': "url('background-dark-2.jpg')",
				'light': "url('background-light.jpg')",
			}
		}
	},
	plugins: []
};

export default config;
