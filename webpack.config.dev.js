import webpack from 'webpack';
import path from 'path';

export default {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: ['webpack-hot-middleware/client', path.resolve(__dirname, 'src/index.jsx')],
  target: 'web',
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      { test: /\.(js|jsx)$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader'] },
      { test: /(\.css)$/, loaders: ['style', 'css'] },
    ],
  },
};
