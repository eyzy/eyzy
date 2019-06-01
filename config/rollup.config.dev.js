import pkg from '../package.json'
import typescript from 'rollup-plugin-typescript'
import scss from 'rollup-plugin-scss'
import serve from 'rollup-plugin-serve'

let isServerStarted = false
let configFor = function(name) {
  const config = {
    input: `examples/${name}/src/${name}.tsx`,
    output: {
      sourcemap: true,
      format: 'umd',
      file: `examples/${name}/build/${name}.js`,
      name: 'Component'
    },
    plugins: [
      typescript(),
      scss({
        outputStyle: 'compressed'
      })
    ]
  }

  if (!isServerStarted) {
    config.plugins.push(serve({
      contentBase: ['dist', 'examples'],
      port: 8081,
      open: true
    }))

    isServerStarted = true
  }

  return config
}

export default [
  {
    input: `src/index.ts`,
    plugins: [
      typescript(),
      scss({
        outputStyle: 'compressed'
      })
    ],
    output: {
      sourcemap: true,
      format: 'umd',
      file: `dist/eyzy.js`,
      name: 'Eyzy'
    }
  },
  configFor('button'),
  configFor('input')
]