import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			// Include .js files for JSX transformation
			include: '**/*.{jsx,js}',
		}),
		tailwindcss(),
	],
	define: {
		global: 'globalThis',
	},
	server: {
		port: 3000,
		open: true,
		host: true, // Allow external access
	},
	build: {
		outDir: 'build',
		sourcemap: false, // Disable sourcemaps to save memory
		// Improve build performance
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['react', 'react-dom'],
					router: ['react-router-dom'],
					ui: ['react-bootstrap', 'bootstrap'],
					animations: ['lottie-react', 'gsap'],
					syntax: ['react-syntax-highlighter'],
				},
			},
		},
		// Increase chunk size warning limit
		chunkSizeWarningLimit: 1000,
		// Reduce memory usage
		minify: 'esbuild',
		target: 'es2015',
	},
	// Optimize dependency pre-bundling
	optimizeDeps: {
		include: [
			'react',
			'react-dom',
			'react-router-dom',
			'firebase/app',
			'firebase/firestore',
		],
	},
	// Improve CSS handling
	css: {
		devSourcemap: true,
	},
})
