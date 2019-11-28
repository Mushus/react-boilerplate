module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  ignorePatterns: ['node_modules', 'webpack.config.base.js', 'webpack.config.dev.js', 'webpack.config.prod.js'],
  rules: {
    // NOTE: TypeScript で JSX を使用すると警告が出る
    'react/jsx-filename-extension': ['warn', { 'extensions': ['.tsx', '.jsx']  }],
    // NOTE: react-router の Link でエラーが発生する
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton']
    }],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.base.js'
      }
    },
  },
};
