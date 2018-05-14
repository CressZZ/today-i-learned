//모듈 로드
const webpack = require('webpack');
const path = require('path'); //Noode.js Built-in Module

// 웹팩 환경설정 객체
let webpack_config = {
  // 진입파일 설정
  entry: './app/app.js',
  // 출력파일 설정
  output:{
    // 절대경로 설정
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // 모듈로더 설정
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      } // babel-loader
    ] //rule
  } //module

};

// 모듈 내보내기
// webpack 내보낸 모듈을 해석하여 번들링
module.exports = webpack_config;
