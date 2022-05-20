let esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['./src/app.ts'],
    bundle: true,
    sourcemap : true,
    target : 'es2015',
    //minify : true,
    outfile: './dist/app.js',
    tsconfig: './tsconfig.json'
}).catch(() => process.exit(1));