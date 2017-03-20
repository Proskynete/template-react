module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  context: __dirname,
  entry: {
    app: ['./src/index.jsx']
  },
  output: {
    path: '/assets/js/',
    filename: 'bundle.js',
    publicPath: '/assets/js/'
  },
  devServer: {
    contentBase: __dirname,
    port: 9000,
    compress:true,
    inline: true
  },
  module: {
    loaders: [
      {
        test: /(\.js|.jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      }
    ]
  }
}