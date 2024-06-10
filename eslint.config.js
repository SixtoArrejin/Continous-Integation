// import jsConfig from '@eslint/js';

// Configuración principal de ESLint
const mainConfig = {
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
    'no-console': 'off',
    'indent': ['error', 2]
  }
};

// Configuración para archivos de prueba
const testConfig = {
  files: ['test/test.js'], // Ajusta la ruta a tus archivos de prueba
  languageOptions: {
    globals: {
      describe: 'readonly',
      it: 'readonly',
      expect: 'readonly'
    }
  }
};

// Configuración para ignorar la carpeta cypress
const ignoreCypressConfig = {
  files: ['cypress/**/*'],
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'off'
  }
};

// Exportar la configuración combinada
export default [
  mainConfig,
  testConfig,
  ignoreCypressConfig
];
