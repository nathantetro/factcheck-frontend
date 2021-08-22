const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const dist = path.resolve(__dirname, 'dist')


module.exports = {
  entry: "./src/index.jsx",
  devtool: 'source-map',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|woff(2)?|ttf|otf|svg)$/i,
        type: 'asset'
      },
      {
        test: /\.(pdf|gif|png|jpe?g|svg)$/,
        type: 'asset'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'challenge/index.html',
      template: 'public/challenge.html'
    })
  ],
  devServer: {
    contentBase: dist,
    open: true,
    compress: true,
    overlay: true
  }
}