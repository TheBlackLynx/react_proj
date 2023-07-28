module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        'eslint:recommended', 
        'plugin:react/recommended', 
        'plugin:@typescript-eslint/recommended', 
        'plugin:storybook/recommended'
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react", 
        "@typescript-eslint", 
        "i18next", 
        "react-hooks", 
        "marica-path-checker-plugin"
    ],
    "rules": {
        "max-len": [1, 100, 2],
        'react-in-jsx-scope': 'off',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'indent': [2, 4],
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', 'tsx']
        }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        //'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'import/extensions': 'off',
        'react/react-in-jsx-scope': 'off',
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        'no-useless-escape': 'off',
        "react/display-name": "off",
        "i18next/no-literal-string": [1, {
            'mode': 'jsx-only',
            'ignoreAttribute': ['data-testid', 'to']
        }],
        "max-len": ["error", {
            ignoreComments: true
        }],
        "react/prop-types": 0,
        'typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'max-len': [2, 100],
        "react/jsx-props-no-spreading": "off",
        "marica-path-checker-plugin/path-checker": ['error', {alias: '@'}],
        "marica-path-checker-plugin/public-api-imports": [
            'error', 
            {
                alias: '@',
                testFilePattens: ['**/*.test.ts', '**/*.test.ts', '**/StoreDecorator.tsx'],
            }
        ]
    },
    globals: {
        __API__: true,
        __IS_DEV__: true,
        __PROJECT__: true
    },
    overrides: [{
        files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
            "i18next/no-literal-string": "off",
            "max-len": 'off'
        }
    }]
};