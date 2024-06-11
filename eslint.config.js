// Configuración principal de ESLint
const mainConfig = {
  files: ['**/*.js'], // Elimina la exclusión de cypress aquí
  ignores: ['cypress/**/*.js'], // Utiliza ignorePatterns en lugar de exclude
  languageOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    globals: {
      browser: true,
      es2021: true,
      document: 'readonly', 
      window: 'readonly',
      module: 'readonly',
      require: 'readonly'
    }
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'indent': ['error', 2],
    'no-undef': 'error' 
  }
};

// Configuración para archivos de prueba
const testConfig = {
  files: ['test/**/*.js'], // Ajusta la ruta a tus archivos de prueba
  languageOptions: {
    globals: {
      describe: 'readonly',
      it: 'readonly',
      expect: 'readonly'
    }
  }
};

// Exportar la configuración combinada
module.exports = [
  mainConfig,
  testConfig
];
