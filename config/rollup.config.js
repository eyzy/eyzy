import pkg from '../package.json'
import typescript from 'rollup-plugin-typescript'
import scss from 'rollup-plugin-scss'

const sourcemap = 'production' !== process.env.NODE_ENV

const version = pkg.version
const banner = `
/*!
 * ${pkg.library} v${version}
 * (c) ${new Date().getFullYear()} amsik
 * Released under the MIT License.
 */
`

const config = {
  input: 'src/index.ts',
  external: ['react'],
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap,
      banner
    }
  ],
  cache: false,
  plugins: [
    typescript(),
    scss({
      output: true
    })
  ]
}

export default config
