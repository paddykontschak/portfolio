var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/js/app.js', './src/scss/app.scss'],
  output: {
    filename: 'dist/app.js'
  },
  module: {

    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1',
        }),
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'dist/[name].css',
      allChunks: true,
    }),
  ],
};