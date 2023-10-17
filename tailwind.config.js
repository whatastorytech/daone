/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				cg: ["ClashGrotesk", "Inter", "system-ui"],
			  },
		}
	},
	plugins: []
};
