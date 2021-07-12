import { defineConfig } from 'vite'

export default defineConfig({
    css: {
        modules: {
            localsConvention: 'camelCase'
        }
    },
    base: '/GreenCreds/',
    build: {
        outDir: 'docs'
    }
})