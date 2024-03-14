module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "perfectionist", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto",
        "printWidth": 100,
        "useTabs": false,
        "singleQuote": true,
        "semi": false
      }
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
