
/**
 * @type {import('@rspack/core').Configuration}
 */
module.exports = {
    output: {
      path: 'dist/rspack',
      library: {
        type: 'module'
      }
    },

    experiments: {
      outputModule: true,
    },
    mode: 'production',
    context: __dirname,
    resolve: {
      extensions: ['.ts','...']
    },
    
    entry:{
      'export-type': './cases/export-type/index.ts',
      'const-enum':'./cases/const-enum/index.ts'
    },
    optimization: {
      moduleIds:'named',
      minimize:false,
    },
    module: {
      parser: {
        javascript: {
          'exportsPresence': 'warning'
        }
      },
      rules: [
        {
          test: /\.ts$/,
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
              },
            },
          },
          type: 'javascript/auto',
        },
      ],
    },
  }