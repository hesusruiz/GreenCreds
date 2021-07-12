import { defineConfig } from 'vite'

export default defineConfig({
    css: {
        modules: {
            localsConvention: 'camelCase'
        }
    },
    build: {
        outDir: 'docs'
    }
})