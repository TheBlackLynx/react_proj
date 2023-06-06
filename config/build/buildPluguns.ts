import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import { BindOptions } from 'dgram';
import { BuildOptions } from './types/config';
import CopyPlugin from "copy-webpack-plugin";
import CircularDependencyPlugin from 'circular-dependency-plugin';



export function buildPlugins({paths, isDev, apiUrl, project} : BuildOptions)
: webpack.WebpackPluginInstance[] {

    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
            filename: './index.html'
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
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
        new CircularDependencyPlugin({
            // exclude detection of files based on a RegExp
            exclude: /a\.js|node_modules/,
            // include specific files based on a RegExp
            include: /dir/,
            // add errors to webpack instead of warnings
            failOnError: true,
            // allow import cycles that include an asyncronous import,
            // e.g. via import(/* webpackMode: "weak" */ './file.js')
            allowAsyncCycles: false,
            // set the current working directory for displaying module paths
            cwd: process.cwd(),
        }),
    ]
  
    if (isDev){
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false
        }))
    }
   
   
    return plugins
}