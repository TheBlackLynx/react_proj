import { BuildOptions } from "./types/config";
import { buildPlugins } from './buildPluguns'
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import webpack from 'webpack';
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions) : webpack.Configuration {
    const { mode, isDev } = options;
    const { entry, build, html } = options.paths;
    return {
        mode: mode,
        module: {
            rules: buildLoaders(options)
          },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        entry: entry,
        output: {
            filename: '[name].[contenthash].js',
            path: build,
            clean: true
        },
        plugins: buildPlugins(html, isDev),
      }
}