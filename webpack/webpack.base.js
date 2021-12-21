const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV !== 'production'

const getCssLoaders = importLoaders => [
  isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      modules: false,
      sourceMap: isDev,
      importLoaders
    }
  }
  // {
  //   loader: 'postcss-loader',
  //   options: {
  //     ident: 'postcss',
  //     plugins: [
  //       // 修复一些和 flex 布局相关的 bug
  //       require('postcss-flexbugs-fixes'),
  //       require('postcss-preset-env')({
  //         autoprefixer: {
  //           grid: true,
  //           flexbox: 'no-2009'
  //         },
  //         stage: 3
  //       }),
  //       require('postcss-normalize')
  //     ],
  //     sourceMap: isDev
  //   }
  // }
]

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': path.join(__dirname, '../', 'app/renderer'),
      '@viz': path.join(__dirname, '../', 'app/viz/index1.html')
    }
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: { cacheDirectory: true }
            }
          },
          {
            test: /\.css$/,
            use: getCssLoaders(0)
          },
          {
            test: /\.less$/,
            use: [
              ...getCssLoaders(1),
              {
                loader: 'less-loader',
                options: {
                  sourceMap: isDev
                }
              }
            ]
          },
          {
            test: /\.(jpg|png|jpeg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name]_[hash].[ext]',
                  outputPath: 'images/'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['**/*', '!electron.js'] })]
}
