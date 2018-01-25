var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/js/app.js', './src/scss/app.scss'],
  output: {
    filename: 'dist/js/app.js'
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
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
            useRelativePath: true,
            outputPath: 'dist/img/'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'dist/css/[name].css',
      allChunks: true,
    }),
  ],
};