import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';

export default {
  root: true,
  ignorePatterns: ['dist'],
  extends: [
    js.configs.recommended,
    'plugin:@typescript-eslint/recommended', // Instead of spreading configs
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname, // Assuming this is what you meant by `import.meta.dirname`
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: { version: '18.3' },
  },
  plugins: ['react-hooks', 'react-refresh', 'react', '@typescript-eslint'],
  rules: {
    ...reactHooks.configs.recommended.rules,
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
