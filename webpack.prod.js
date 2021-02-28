const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const OptimizeCssAssetsWebpackPlugin = require( 'optimize-css-assets-webpack-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const MinifyPlugin = require("babel-minify-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [ new OptimizeCssAssetsWebpackPlugin() ]
  },
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }  
      },
      {
        test: /\.css/,
        exclude: /styles\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /styles\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
            sources: false,
            minimize: false,
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }), 
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      ignoreOrder: false
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets/' }
      ]
    }),
    new MinifyPlugin(),
    new CleanWebpackPlugin()
  ]
}
