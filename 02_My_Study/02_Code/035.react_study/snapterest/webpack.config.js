module.exports = {
  context: __dirname + '/source',
  entry: './app.js',
  output: {
    path: __dirname + '/build',
    filename: "bundle.js"
  },
  devServer: {
    inline: true,
            port: 7777,
    historyApiFallback: true,
// noInfo: true,
//   contentBase: __dirname + '/build'
}
}
