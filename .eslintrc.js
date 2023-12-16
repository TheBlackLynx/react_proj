module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:storybook/recommended",
        "plugin:import/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "i18next",
        "react-hooks",
        "marica-path-checker-plugin",
        "unused-imports",
        "import",
        "prettier",
    ],
    rules: {
        "react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [
            2,
            {
                extensions: [".js", ".jsx", "tsx"],
            },
        ],
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        //'no-unused-vars': 'warn',
        "react/require-default-props": "off",
        "react/function-component-definition": "off",
        "import/extensions": "off",
        "react/react-in-jsx-scope": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "no-useless-escape": "off",
        "react/display-name": "off",
        "i18next/no-literal-string": [
            1,
            {
                mode: "jsx-only",
                ignoreAttribute: ["data-testid", "to"],
            },
        ],
        "react/prop-types": 0,
        "typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "max-len": [2, 130],
        "react/jsx-props-no-spreading": "off",
        "marica-path-checker-plugin/path-checker": ["error", { alias: "@" }],
        "marica-path-checker-plugin/layer-import": [
            "error",
            {
                alias: "@",
                ignoreImportPatterns: [
                    "**/StoreProvider",
                    "**/testing",
                    "**/styles/**",
                    "**/routeConfig/**",
                ],
            },
        ],
        "marica-path-checker-plugin/public-api-imports": [
            "error",
            {
                alias: "@",
                testFilePattens: [
                    "**/*.test.ts",
                    "**/*.story.ts",
                    "**/StoreDecorator.tsx",
                    "**/*/*routeConfig.tsx"
                ],
            },
        ],
        "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
            "warn",
            {
                vars: "all",
                varsIgnorePattern: "^_",
                args: "after-used",
                argsIgnorePattern: "^_",
            },
        ],
        "import/named": 1,
        "import/namespace": 2,
        "import/default": 2,
        "import/export": 1,
        "prettier/prettier": "error",
        "react/jsx-max-props-per-line": ['error', { maximum: 4}]
    },
    globals: {
        __API__: true,
        __IS_DEV__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
            rules: {
                "i18next/no-literal-string": "off",
                "max-len": "off",
            },
        },
    ],
};
