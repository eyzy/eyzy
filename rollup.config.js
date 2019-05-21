import pkg from './package.json'
import typescript from 'rollup-plugin-typescript'
import scss from 'rollup-plugin-scss'
import serve from 'rollup-plugin-serve'

const config = {
  input: 'index.ts',
  external: ['react'],
  output: [
    {
      file: `dist/${pkg.name}.js`,
      format: 'umd',
      name: pkg.library,
      sourcemap: true
    }
  ],
  cache: false,
  plugins: [
    typescript(),
    scss({
      outputStyle: 'compressed'
    })
  ]
}

if ('development' == process.env.NODE_ENV) {
  config.plugins.push(serve({
    contentBase: ['dist', 'examples'],
    port: 8081,
    open: true
  }))
}

export default config
