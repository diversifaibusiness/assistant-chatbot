import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {}
		},
		extend: {
			colors: {
				background: '#f9f9f9',
				foreground: '#d4d4d8',
				primary: '#00D300',
				secondary: '#fca5a5',
				border: '#475569',
				text: '#303030',
				text2: '#52525b'
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	}
};

export default config;
