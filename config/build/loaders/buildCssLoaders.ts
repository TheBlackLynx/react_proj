import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCssLoaders(isDev: boolean){
    console.log('!!!!isDev', isDev)
    return  {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            
            
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (path: string) => Boolean(
                            path.includes('.module.')),
                        localIdentName: isDev 
                            ? '[path][name]__[local]' 
                            : '[hash:base64:8]'
                    },
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
          
        ],
    }
}