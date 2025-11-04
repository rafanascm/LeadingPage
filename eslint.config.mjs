// eslint.config.mjs
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import nextPlugin from '@next/eslint-plugin-next';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: ['node_modules/**', '.next/**', 'dist/**', 'build/**', 'public/**'],
  },

  js.configs.recommended,

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        // project: ['./tsconfig.json'], // ative apenas se quiser rules TS mais estritas
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      '@next/next': nextPlugin,
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] } },
    },
    rules: {
      // Prevenção de ruído / adaptações práticas
      'react/prop-types': 'off', // desativa exigência de PropTypes (TS ou componentes sem PropTypes)
      'react/react-in-jsx-scope': 'off', // não precisa importar React em cada arquivo (JSX transform)
      'no-undef': 'off', // evitar falsos positivos sobre React/Node globals
      '@typescript-eslint/no-explicit-any': 'warn', // deixa `any` como aviso
      '@typescript-eslint/no-empty-object-type': 'off', // evitar erros com tipos vazios temporários

      // regras úteis
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'max-len': ['warn', { code: 120, ignoreComments: true, ignoreStrings: true }],

      // Next core web vitals (mantém boas práticas do Next)
      ...nextPlugin.configs?.['core-web-vitals']?.rules,
    },
  },

  // desativa regras que conflitam com Prettier
  prettierConfig,
];
