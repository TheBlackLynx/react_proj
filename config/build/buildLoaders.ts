import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    const cssLoaders = buildCssLoaders(isDev);
       
    const typescriptLoaders = 
        //если не используем TS, то нужно добавлять еще 
        //babel-loader - транспилятор для преобразования нового 
        //стандарта в старый
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }
    const svgLoader = buildSvgLoader();

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }
    const babelLoader = buildBabelLoader(options);
    return [
        babelLoader,
        typescriptLoaders,
        cssLoaders,
        svgLoader,
        fileLoader,
       
    ]
}