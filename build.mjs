import * as esbuild from 'esbuild'

console.log(await esbuild.build({
  entryPoints: [
    './cases/export-type/index.ts',
    './cases/const-enum/index.ts'
  ],
  bundle: true,
  outdir: 'dist/esbuild'
}))