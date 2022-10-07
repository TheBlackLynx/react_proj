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
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
        }

    const fileLoader = {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    }
    const babelLoader = {
      test: /\.(js|jsx|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            'i18next-extract',
            {
              locales:['ru', 'en'],
              keyAsDefaultValue: true
            }
          ]
        },
      
      }
    }
    return [
      babelLoader,
        typescriptLoaders,
        cssLoaders,
        svgLoader,
        fileLoader,
       
    ]
}