const rules = {
  'no-param-reassign': ['off'],
  'prefer-destructuring': ['off'],
  'prefer-object-spread': ['off'],
  'prefer-ob': ['off'],
  'react/react-in-jsx-scope': ['off'],
  'react/no-string-refs': ['off'],
  'react/prop-types': ['off'],
  'no-restricted-globals': ['error', 'window', 'document'],
  'import/prefer-default-export': 'off',
  'react/jsx-one-expression-per-line': 'off',
  'react/jsx-wrap-multilines': 'off',
  'react/jsx-props-no-spreading': ['off'],
  'import/no-extraneous-dependencies': ['off'],
  'import/extensions': [
    'error',
    {
      js: 'always',
      jsx: 'always',
    },
  ],
  'no-nested-ternary': ['off'],
  'jsx-a11y/click-events-have-key-events': ['off'],
  'jsx-a11y/no-static-element-interactions': ['off'],
  'react/destructuring-assignment': ['off'],
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
  overrides: [
    // REACT
    {
      files: ['**/*.jsx', '**/*.js', '**/*.ts'],
      extends: [
        'plugin:react/recommended',
        'airbnb-base',
        'plugin:prettier/recommended',
      ],
      plugins: ['react'],
      rules: { ...rules },
    },
    {
      files: ['**/*.jsx', 'src/react/shared/*.js'],
      rules: {
        ...rules,
        'import/no-extraneous-dependencies': ['off'],
        'no-dupe-keys': ['off'],
      },
    },

    // REACT KITCHEN_SINK
    {
      files: ['kitchen-sink/react/**/*.jsx', 'kitchen-sink/react/**/*.js'],
      rules: {
        ...rules,
        'react/display-name': ['off'],
        'react/jsx-no-target-blank': ['off'],
        'react/no-unescaped-entities': ['off'],
        'no-console': ['off'],
        'no-restricted-globals': ['off'],
        'no-nested-ternary': ['off'],
        'import/no-unresolved': ['off'],
        'import/no-extraneous-dependencies': ['off'],
        'jsx-a11y/anchor-is-valid': ['off'],
      },
    },
  ],
};
