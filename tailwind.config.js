/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#2dd4bf',
				secondary: '#1a1a1a'
			},
			fontFamily: {
				ogyxen: "'Oxygen Mono', monospace"
			}
		}
	}
};
