const path = require('path')
const { upperFirst, camelCase } = require('lodash')
const pkg = require('./package.json')

module.exports = {
  title: `Relaunch v${pkg.version}`,
  getComponentPathLine: componentPath => {
    const componentName = upperFirst(
      camelCase(path.basename(componentPath, '.tsx')),
    )
    return `import { ${componentName} } from 'relaunch'`
  },
  propsParser: require('react-docgen-typescript').parse,
  require: ['bootstrap/dist/css/bootstrap.min.css'], // https://github.com/styleguidist/react-styleguidist/blob/master/docs/Cookbook.md#how-to-add-custom-javascript-and-css-or-polyfills
  webpackConfig: {
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
          options: { errorsAsWarnings: true },
        },
        { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
        { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      ],
    },
  },
  context: {
    utils: path.resolve(__dirname, 'src/utils'),
  },
  pagePerSection: true,
  sections: [
    {
      name: 'components',
      components: 'src/components/**/*.tsx',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand',
      // sections: [
      //   {
      //     name: 'Buttons',
      //     href: 'button',
      //     content: 'src/components/button/button.md',
      //   },
      // ],
      // Will show "Components" as single page, filtering its children
      sectionDepth: 2,
    },
  ],
}
