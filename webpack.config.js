const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      // {
      //   // Compile source code with ts
      //   test: /\.tsx?$/,
      //   use: 'ts-loader',
      //   exclude: /node_modules/,
      // },
      // {
      //   test: /\.tsx?$/,
      //   use: 'babel-loader',
      //   exclude: /node_modules/,
      // },
      {
        // jest requires fallback to babel
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React from scratch',
      templateContent: () =>
        `<!DOCTYPE html>
        <html>
          <head>
          </head>
          <body>
            <div id="app" />
          </body>
        </html>
      `,
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
