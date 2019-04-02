import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import ImageminPlugin from 'imagemin-webpack-plugin'
import imageminMozjpeg from 'imagemin-mozjpeg'

export default {
  mode: process.env.NODE_ENV || 'production',
  entry: [
    './assets/js/swiper.js',
    './assets/js/smooth.js',
    './assets/js/testimonials.js',
    './assets/js/lazy.js',
  ],
  output: {
    path: path.resolve(__dirname, 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: 'assets/img/',
      to: path.resolve(__dirname, 'assets', 'img'),
      test: /\.(jpe?g)$/,
      ignore: ['*.png','*.svg']
    }]),
    new ImageminPlugin({
      plugins: [
        imageminMozjpeg({
          test: /\.(jpe?g)$/,
          quality: 80,
          progressive: true
        })
      ]
    })
  ]
}