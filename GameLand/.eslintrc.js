// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint', 'tailwindcss'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
        tailwindConfig: './tailwind.config.js',
      },
    ],
    'tailwindcss/classname-order': 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
