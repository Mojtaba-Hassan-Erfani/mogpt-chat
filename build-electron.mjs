import esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['electron.js'],
    outfile: 'dist/electron.js',
    platform: 'node',
    bundle: true,
    target: 'node16',
    format: 'cjs',
  })
  .catch(() => process.exit(1));

