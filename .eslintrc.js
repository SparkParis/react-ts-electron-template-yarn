module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript', 'plugin:react-hooks/recommended'],
  globals: {
    __dirname: false
  },
  rules: {
    'no-undefined': 'warn',
    'no-debugger': 'off',
    complexity: ['error', { max: 99 }],
    indent: 'off',
    'react/jsx-indent': [1, 2],
    'react/jsx-indent-props': [1, 2],
    'react/no-string-refs': 1, // 不要使用ref
    'no-template-curly-in-string': 1, // 在string里面不要出现模板符号
    '@typescript-eslint/prefer-optional-chain': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-duplicate-imports': 'off',
    'react/no-unsafe': 'off',
    '@typescript-eslint/no-invalid-this': 'off',
    'react/jsx-key': 0,
    'no-unused-vars': ['error'],
    '@typescript-eslint/no-require-imports': 'off',
    eqeqeq: [2, 'allow-null'],
    'prefer-arrow-callback': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/indent': ['off']
  }
}
