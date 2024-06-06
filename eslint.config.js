import jsConfig from '@eslint/js';

export default [
  jsConfig.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        browser: true,
        es2021: true,
        document: 'readonly',  // Añadir la global 'document'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off'
    }
  },
  {
    files: ['test/test.js'], // Ajusta la ruta a tus archivos de prueba
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly'
      }
    },
   
  }
];
