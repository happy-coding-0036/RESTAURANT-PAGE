const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: "source-map",

  devServer: {
    contentBase: './dist',
  },

  module: {  
    rules: [  
      {  
        test: /\.js$/,  
        exclude: /node_modules/,  
        use: {  
          loader: 'babel-loader',  
          options: {  
            presets: ['@babel/preset-env']  
          }  
        }  
      },
      
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },


    ]  
  } 
};