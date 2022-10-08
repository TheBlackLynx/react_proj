module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
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
        "i18next"
    ],
    "rules": {
        'react-in-jsx-scope': 'off',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'indent': [2, 4],
        'react/jsx-filename-extension': [2, 
            { extensions: ['.js', '.jsx', 'tsx']}],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        //'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'import/extensions': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-useless-escape': 'off',
        "i18next/no-literal-string": ['error', {'mode': 'jsx-only'}],
        "max-len": ["error", { ignoreComments: true }],
        "react/prop-types": 0
      
    }
}
