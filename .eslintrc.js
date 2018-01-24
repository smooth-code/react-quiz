module.exports = {
  root: true,
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  env: {
    jest: true,
    browser: true,
  },
  rules: {
    'no-shadow': 'off',
    'no-nested-ternary': 'off',

    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'warning',
    'import/extensions': 'warning',

    'class-methods-use-this': 'off',

    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'prefer-promise-reject-errors': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        // As configured in webpack and jest
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },
}
