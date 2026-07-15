import eslintConfig from '@intech.lu/eslint-config';
import eslintReact from '@eslint-react/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  ...eslintConfig,
  {
    files: ["**/*.{js,ts,jsx,tsx,mjsx,mtsx}"],
    extends: [
      eslintReact.configs["recommended-typescript"],
    ],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        }
      }
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@eslint-react/rules-of-hooks': 'error',
      '@eslint-react/exhaustive-deps': 'warn',

      '@eslint-react/dom-no-missing-button-type': 'error',
      '@eslint-react/no-array-index-key': 'error',
      '@eslint-react/no-missing-key': 'error',
      '@eslint-react/no-duplicate-key': 'error',

      '@stylistic/jsx-self-closing-comp': 'error',
      '@stylistic/jsx-curly-brace-presence': 'error',
    }
  },
  {
    // no-implicit-key needs type information, only available on TypeScript-parsed files.
    files: ["**/*.ts", "**/*.tsx", "**/*.mtsx"],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      '@eslint-react/no-implicit-key': 'error',
    },
  }
);
