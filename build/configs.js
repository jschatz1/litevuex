const path = require('path')
const buble = require('rollup-plugin-buble')
const replace = require('rollup-plugin-replace')
const version = process.env.VERSION || require('../package.json').version
const banner =
`/**
 * litevuex v${version}
 * (c) ${new Date().getFullYear()} Evan You
 * @license MIT
 */`

const resolve = _path => path.resolve(__dirname, '../', _path)

const configs = {
  umdDev: {
    input: resolve('main.js'),
    file: resolve('dist/litevuex.js'),
    format: 'umd',
    env: 'development'
  },
  umdProd: {
    input: resolve('main.js'),
    file: resolve('dist/litevuex.min.js'),
    format: 'umd',
    env: 'production'
  },
  commonjs: {
    input: resolve('main.js'),
    file: resolve('dist/litevuex.common.js'),
    format: 'cjs'
  },
  esm: {
    input: resolve('main.js'),
    file: resolve('dist/litevuex.esm.js'),
    format: 'es'
  }
}

function genConfig (opts) {
  const config = {
    input: {
      input: opts.input,
      plugins: [
        replace({
          __VERSION__: version
        }),
        buble()
      ]
    },
    output: {
      banner,
      file: opts.file,
      format: opts.format,
      name: 'Vuex'
    }
  }

  if (opts.env) {
    config.input.plugins.unshift(replace({
      'process.env.NODE_ENV': JSON.stringify(opts.env)
    }))
  }

  return config
}

function mapValues (obj, fn) {
  const res = {}
  Object.keys(obj).forEach(key => {
    res[key] = fn(obj[key], key)
  })
  return res
}

module.exports = mapValues(configs, genConfig)