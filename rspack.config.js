
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    mode: 'production',
    context: __dirname,
    resolve: {
      extensions: ['.ts','...']
    },
    entry:['./cases/export-type/index.ts'],
    optimization: {
      moduleIds:'named',
      minimize:false,
    },
    module: {
      parser: {
        javascript: {
          'exportsPresence': 'error'
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