const path = require('path');

const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'hello-world': './src/hello2.js',
    kiwi: './src/kiwi.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
    clean: true,
  },

  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, //4kb 넘으면 asset/resource
          },
        },
      },
      {
        test: /\.(ttf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
    ],
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'hellowrold-1.html',
      // 여러개 만들때 파일네임 사용해서 지정
      title: 'Hello html 타이틀2222',
      chunks: ['hello-world'],
      template: 'src/page-template.hbs',
      // filename: 'subfoleder/custom_filename.html',

      description: '메타태크 설명222',

      // minify를 false 하면 html 파일이 쫙 크게 나옴
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'kiwi.html',
      title: 'kiwi',
      chunks: ['kiwi'],
      // chunk도 여러개쓸때 그리고 엔트리포인트대로
      template: 'src/page-template.hbs',
      description: '키위',

      minify: false,
    }),

    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: [path.join(process.cwd(), 'build/**/*')], //no matter nesting level
    // }),
  ],
};
