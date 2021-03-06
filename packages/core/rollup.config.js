import buble from 'rollup-plugin-buble'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'src/index.js',
  plugins: [
    buble(),
    nodeResolve({
      jsnext: true
    })
  ],
  targets: [
    {
      dest: 'dist/mostCore.js',
      format: 'umd',
      moduleName: 'mostCore',
      sourceMap: true
    },
    {
      dest: 'dist/mostCore.es.js',
      format: 'es',
      sourceMap: true
    }
  ]
}
