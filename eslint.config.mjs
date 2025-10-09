import eslintConfig from '@intech.lu/eslint-config';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  ...eslintConfig,
  {
    files: ["**/*.{jsx,tsx,mjsx,mtsx}"],
    extends: [
      react.configs.flat.recommended,
    ],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        }
      }
    },
    settings: {
      react: {
        version: 'detect',
      }
    },
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/button-has-type': 'error',
      'react/no-array-index-key': 'error',
      'react/jsx-key': 'error',
      'react/self-closing-comp': 'error',
      'react/jsx-curly-brace-presence': 'error',
      'react/no-this-in-sfc': 'error',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
        },
      ],
      'react/no-multi-comp': 'warn',
      'react/destructuring-assignment': [
        'error',
        'always',
        {
          destructureInSignature: 'always',
        },
      ],
      // This rules below requires the import of React but it's not compatible with InTechlux where an import cannot be not used
      'react/react-in-jsx-scope': 'off',
    }
  }
);
