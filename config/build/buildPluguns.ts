import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';
import  ForkTsCheckerWebpackPlugin from'fork-ts-checker-webpack-plugin';
// eslint-disable-next-line import/default
import CopyPlugin from 'copy-webpack-plugin';



export function buildPlugins({paths, isDev, apiUrl, project} : BuildOptions)
: webpack.WebpackPluginInstance[] {
    const isProd = !isDev;

    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
            filename: './index.html'
        }),
        new webpack.ProgressPlugin(),
       
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project)
        }),
        new ReactRefreshWebpackPlugin({
            overlay: false
        }),
        new CopyPlugin({
            patterns: [
                { from: paths.buildLocales, to: paths.locales},
            ],
        }),
        // new CircularDependencyPlugin({
        //     exclude: /node_modules/,
        //     failOnError: true,
        // }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: 'write-references',
            },
        }),
    ]
  
    if (isDev){
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false
        }))
    }
   
    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css'
            })
        )
        plugins.push(
            new CopyPlugin({
                patterns: [
                    { from: paths.buildLocales, to: paths.locales},
                ],
            }))
    }
   
    return plugins
}