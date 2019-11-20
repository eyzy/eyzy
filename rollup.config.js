import typescript from 'rollup-plugin-typescript'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import scss from 'rollup-plugin-scss'

import fs from 'fs'
import path from 'path'
import pkg from './package.json'

const isProd = 'production' === process.env.NODE_ENV

const version = pkg.version
const banner = `
/*!
 * ${pkg.library} v${version}
 * (c) ${new Date().getFullYear()} amsik
 * Released under the MIT License.
 */
`

let config = [{
  input: 'src/index.ts',
  external: ['react'],
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'Eyzy',
      sourcemap: true,
      banner
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      banner
    }
  ],
  cache: false,
  plugins: [
    typescript(),
    external(),
    scss({
      output: (styles) => {
        fs.writeFileSync(path.resolve('./style.css'), styles)
      },
    }),
    url(),
    babel({
      exclude: ['node_modules/**', 'dist/index.es.js'],
      plugins: [ 'external-helpers' ]
    }),
    resolve({ extensions: ['.jsx', '.js'] }),
    commonjs()
  ]
}]

if (isProd) {
  config.push(
    {
      input: 'src/index.ts',
      external: ['react'],
      output: [
        {
          file: pkg.module,
          format: 'es',
          sourcemap: true,
          banner
        }
      ],
      cache: false,
      plugins: [
        typescript(),
        external(),
        scss({
          output: (styles) => {
            fs.writeFileSync(path.resolve('./style.css'), styles)
          },
        }),
        url(),
        resolve({ extensions: ['.jsx', '.js'] }),
      ]
    }
  )
}


export default config