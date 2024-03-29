import { BuildPaths } from "../build/types/config"
import path from "path"
import { buildCssLoaders } from "../build/loaders/buildCssLoaders"
import webpack, { DefinePlugin, RuleSetRule } from "webpack"
import { buildSvgLoader } from "../../config/build/loaders/buildSvgLoader"

export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: ''
        
    }
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');
    // @ts-ignore
    config!.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config!.module!.rules.push(buildSvgLoader());
    config!.module!.rules.push(buildCssLoaders(true));
    config.plugins?.push(new DefinePlugin({
        __IS_DEV__: true,
        __API__: JSON.stringify('http://testapi.ru'),
        __PROJECT__:JSON.stringify('storybook') 
    }))
    return config;
}