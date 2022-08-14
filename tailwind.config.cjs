const { paletteOne } = require('color-palettes-tailwindcss');

const base = {
	white: '#ffffff',
	black: '#000000',
	transparent: 'transparent'
};
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontSize: {
				'7xl': '5rem',
				'8xl': '6rem',
				'9xl': '7rem',
				'10xl': '8rem',
				'11xl': '9rem',
				'12xl': '10rem'
			}
		},
		colors: { ...paletteOne, ...base }
	},
	variants: { fill: ['hover'], animation: ['responsive', 'hover', 'focus'] }
};
