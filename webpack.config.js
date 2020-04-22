const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, options) => {

    const PATHS = {
        src: path.join(__dirname, './src'),
        dist: path.join(__dirname, './dist'),
    };

    const PAGES_DIR = `${PATHS.src}/pug/pages/`;
    const production = options.mode === 'production';
    const publicDir = './';

    return {
        entry: {
            app: `${PATHS.src}/js`,
        },
        devtool: production ? false : 'eval-sourcemap',
        devServer: {
            overlay: {
                warnings: true,
                errors: true,
            },
            watchOptions: {
                ignored: /node_modules/,
            },
        },
        output: {
            filename: 'js/[name].[hash].js',
            path: PATHS.dist,
            publicPath: publicDir,
        },
        optimization: {
            splitChunks: {
              cacheGroups: {
                vendor: {
                  name: 'vendors',
                  test: /node_modules/,
                  chunks: 'all',
                  enforce: true,
                },
              },
            },
          },
        module: {
            rules: [{
                    test: /\.pug$/,
                    loader: 'pug-loader',
                },{
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: '/node_modules/',
                },{
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                        }, {
                            loader: 'sass-loader',
                        },
                    ],
                },{
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    exclude: [/ui-kit/, /img/],
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: './fonts/[name].[ext]',
                            publicPath: '../',
                        }
                    }
                },{
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader',
                    exclude: [/fonts/],
                    options: {
                        name: './img/[name].[ext]',
                        publicPath: '../',
                    },
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.scss'],            
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'css/[name].[hash].css',
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jQuery',
            }),
            new HtmlWebpackPlugin({
                template: `${PAGES_DIR}/index.pug`,
                filename: 'index.html',          
            }),
        ],
    };
};