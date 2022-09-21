import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    const cssLoaders = 
        {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
              
              // Translates CSS into CommonJS
              {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (path: string) => Boolean(path.includes('.module.')),
                        localIdentName: isDev 
                        ? '[path][name]__[local]' 
                        : '[hash: base64: 8]'
                    },
                  }
              },
              // Compiles Sass to CSS
              "sass-loader",
              
            ],
          }
    const typescriptLoaders = 
        //если не используем TS, то нужно добавлять еще 
        //babel-loader - транспилятор для преобразования нового 
        //стандарта в старый
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        }
    return [
        typescriptLoaders,
        cssLoaders
    ]
}