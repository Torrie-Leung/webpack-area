const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Output Management'
    }),
    new CleanWebpackPlugin()
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        use:[
          "style-loader",
          "css-loader"
          ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use:[
          {
            loader:"file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  }
}