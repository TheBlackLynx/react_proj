import babeRemovePropsPlugin from "../../babel/babeRemovePropsPlugin";
import { BuildOptions } from "../types/config";


interface BabelLoaderProps extends BuildOptions {
    isTsx?: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: BabelLoaderProps) {
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                "plugins": [
                    ["i18next-extract", {
                        "locales": [
                            "ru",
                            "en"
                        ],
                        "keyAsDefaultValue": true
                    }],
                    [
                        "@babel/plugin-transform-runtime"
                    ],
                    ["@babel/plugin-transform-typescript", {
                        isTsx,
                    }],
                    [
                        babeRemovePropsPlugin,
                        {
                            props: ['data-testid']
                        },
                    ]

                ],
            },
      
        }
    }
}