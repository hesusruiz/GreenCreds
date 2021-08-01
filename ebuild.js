require('esbuild').build({
    entryPoints: ['src/welcome.js','src/app.js'],
    bundle: true,
    loader: {
        '.png': 'dataurl',
        '.svg': 'text',
    },
    target: 'es2017',
    format: 'esm',
    minify: false,
    outdir: 'docs',
  }).catch(() => process.exit(1))