const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'mezon-web-sdk.js',
    path: path.resolve(__dirname, 'build'),
    library: {
      name: 'Mezon',
      type: 'assign-properties',
    },
  },
};
