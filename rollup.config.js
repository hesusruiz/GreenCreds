import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';

export default [
    {
        input: 'src/app.js',
        output: {
            dir: 'docs',
            format: 'es'
        },
        plugins: [
            nodeResolve(),
            json(),
            image()
        ]
    },
    {
        input: 'src/welcome.js',
        output: {
            file: 'docs/welcome.js',
            format: 'es'
        },
        plugins: [
            nodeResolve(),
            json(),
            image()
        ]
    }
]
