import { BuildOptions } from "../types/config";

export function buildBabelLoader({ isDev }: BuildOptions) {
    return {
        test: /\.(js|jsx|tsx)$/,
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
                    }]
                ]
            },
      
        }
    }
}