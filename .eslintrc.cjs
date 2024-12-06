module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier', 'simple-import-sort', 'import', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  root: true,
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'simple-import-sort/imports': 'off',
    'simple-import-sort/exports': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'prettier/prettier': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        ignoreCase: true,
        multiline: 'last',
      },
    ],
  },
};
