const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
    {
	test: /\.(js|jsx)$/,
	exclude: /node_modules/,
	use: ['babel-loader'],
	},
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], 
          },
        },
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  resolve: {
	extensions: ['*', '.js', '.jsx'],
	},
	
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html',
    }),
  ],
  devServer: {
    static: './dist',
    compress: true,
    open: true,
    hot: true,
  },
};
