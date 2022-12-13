module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended'],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["react", "@typescript-eslint", "i18next", "react-hooks"],
    "rules": {
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
        "react/prop-types": 0
    },
    overrides: [{
        files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
            "i18next/no-literal-string": "off",
            "max-len": 'off'
        }
    }]
};