import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import * as pkg from './package.json'

const name = 'webanimate'

export default {
  input: pkg.main,
  output: {
    file: `dist/${name}.js`,
    format: 'umd',
    name: name,
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs({
      namedExports: {
        'node_modules/underscore/underscore.js': [
          'isObject',
          'isString',
          'isArray'
        ]
      }
    }),
    terser({
      output: {
        preamble: `//${pkg.name} v${pkg.version} ${pkg.homepage}`
      }
    })]
}
