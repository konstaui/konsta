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
  'import/no-relative-packages': ['off'],
  'import/extensions': [
    'error',
    'never',
    {
      ignorePackages: true,
      pattern: {
        js: 'always',
        jsx: 'always',
        json: 'always',
      },
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

    // Vue
    {
      files: ['**/*.vue'],
      extends: [
        'airbnb-base',
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        ...rules,
        'vue/component-definition-name-casing': 'off',
        'vue/require-default-prop': 'off',
      },
    },
    {
      files: ['**/*.vue', 'src/vue/shared/*.js'],
      rules: {
        ...rules,
        'import/no-extraneous-dependencies': ['off'],
        'no-dupe-keys': ['off'],
      },
    },
    // VUE KITCHEN_SINK
    {
      files: ['kitchen-sink/vue/**/*.vue', 'kitchen-sink/vue/**/*.js'],
      rules: {
        ...rules,
        'no-console': ['off'],
        'no-restricted-globals': ['off'],
        'no-nested-ternary': ['off'],
        'import/no-unresolved': ['off'],
        'import/no-extraneous-dependencies': ['off'],
      },
    },
    // SVELTE
    {
      plugins: ['svelte3'],
      files: ['**/*.svelte'],
      extends: ['airbnb-base'],
      processor: 'svelte3/svelte3',
      rules: {
        ...rules,
        'no-restricted-globals': ['off'],
        'object-curly-newline': ['off'],
        curly: ['off'],
        indent: ['off'],
        'operator-linebreak': ['off'],
        'nonblock-statement-body-position': ['off'],
        'import/no-mutable-exports': ['off'],
        'import/first': ['off'],
        'import/no-unresolved': ['off'],
        'import/no-extraneous-dependencies': ['off'],
        'import/prefer-default-export': ['off'],
        'import/extensions': ['off'],
        'no-multiple-empty-lines': ['off'],
        'no-undef-init': ['off'],
        'no-shadow': ['off'],
        'no-nested-ternary': ['off'],
        'a11y-invalid-attribute': ['off'],
        'a11y-missing-attribute': ['off'],
        'max-len': ['off'],
        'no-return-assign': ['off'],
        quotes: ['off'],
        'comma-dangle': ['off'],
        'a11y-autofocus': ['off'],
        'prefer-const': ['off'],
        'no-unused-vars': ['off'],
        'object-shorthand': ['off'],
        'import/newline-after-import': ['off'],
        'operator-assignment': ['off'],
      },
    },
    // SVELTE KITCHEN_SINK
    {
      files: ['kitchen-sink/svelte/**/*.js'],
      rules: {
        ...rules,
        'import/extensions': ['off'],
        'no-restricted-globals': ['off'],
        'import/no-unresolved': ['off'],
        'import/no-extraneous-dependencies': ['off'],
      },
    },
    {
      files: ['kitchen-sink/svelte/**/*.svelte'],
      rules: {
        ...rules,
        'no-console': ['off'],
        'no-return-assign': ['off'],
        'implicit-arrow-linebreak': ['off'],
        'no-restricted-globals': ['off'],
      },
    },
  ],
};
