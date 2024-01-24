module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  globals: {require: true,},
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    "react/jsx-no-undef": ["error", { "allow": ["isPending"] }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/no-unknown-property': [0 , { ignore: ['css'] }],
    'react/prop-types': [2, {
      'skipUndeclared': true,
      'ignore': ['children', 'className', 'isPending']
    }],
  },
};

