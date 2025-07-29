import eslintPlugin from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import globals from "globals";

export default [
  {
    ignores: ['**/node_modules/**', '**/dist/**', 'bun.lockb', 'eslint.config.ts'],
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        project: true,
        tsconfigRootDir: process.cwd(),
      },
      globals: {
        ...globals.node
      }
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      ...eslintPlugin.configs.recommended.rules,
      ...typescriptPlugin.configs.recommended.rules,

      // カスタムルール（任意）
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
];
