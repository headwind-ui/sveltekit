import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';
/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	// ssr: {
	// 	noExternal: Object.keys(pkg.dependencies || {})
	// },

	resolve: {
		alias: {
			$src: resolve('./src'),
			$utils: resolve('./src/utils'),
			$assets: resolve('./assets')
		}
	}
};

export default config;
