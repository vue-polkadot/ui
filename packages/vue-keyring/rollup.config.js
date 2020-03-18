import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
let defaults = { compilerOptions: { declaration: true } };
let override = { compilerOptions: { declaration: false } };
export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      tsconfigDefaults: defaults,
      tsconfig: "tsconfig.json",
      tsconfigOverride: override,
      // verbosity: 3,
    })
  ],
}
