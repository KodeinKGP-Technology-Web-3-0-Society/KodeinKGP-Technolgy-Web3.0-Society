import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [
		react(),
	],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.js',
		css: true,
		// Coverage configuration
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			exclude: ['node_modules/', 'src/setupTests.js'],
		},
		// Test file patterns for JavaScript only
		include: ['src/**/*.{test,spec}.{js,jsx}'],
		exclude: ['node_modules/', 'build/'],
	},
})
