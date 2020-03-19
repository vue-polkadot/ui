import acornPrivateFields from 'acorn-private-class-elements'
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json'

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
  // acornInjectPlugins: [
  //   acornPrivateFields()
  // ],
  plugins: [
    typescript({ lib: ["es5", "es6", "dom"], target: "es5" })
  ],
}
