// keep in mind, this config consists of *optional* rules
// if you find some rules irrelevant to your use case, feel free to disable them
// eslint exists to help you write code, not to make coding tedious.

module.exports = {
  root: true,
  env: {
    // node: true,
    // browser: true,
    es2020: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    // ecmaFeatures: {
    //   jsx: true,
    // },
  },
  plugins: ['@typescript-eslint', 'prettier', 'import', 'promise', 'unicorn'],
  extends: [
    'airbnb-typescript/base',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:import/typescript',
    'prettier',
    'prettier/vue',
    'prettier/@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      [require.resolve('eslint-import-resolver-typescript')]: {},
      [require.resolve('eslint-import-resolver-node')]: {},
      // [require.resolve('eslint-import-resolver-webpack')]: {
      //   config: path.resolve(__dirname, './build/webpack.config.js'),
      // },
    },
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // https://github.com/vuejs/vue-eslint-parser#️-known-limitations
      },
    },
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
        semi: false,
        printWidth: 100,
        htmlWhitespaceSensitivity: 'ignore',
      },
    ],

    'vue/no-deprecated-dollar-scopedslots-api': ['off'],

    'no-void': ['off'],

    // single or double - choose either, but this is a required rule
    quotes: ['error', 'single'],

    // 'vuetify/grid-unknown-attributes': 'error',
    // 'vuetify/no-legacy-grid': 'error',
    // 'vuetify/no-deprecated-classes': 'error',

    // #region optional rules that can be safely disabled
    '@typescript-eslint/naming-convention': [
      'warn',
      // { format: 'camelCase', trailingUnderscore: 'allow' },
    ],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/no-unsafe-call': ['warn'],
    'no-underscore-dangle': ['off'],
    'max-classes-per-file': ['off'],
    'consistent-return': ['off'],
    'spaced-comment': ['off'],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-param-reassign': [
      'warn',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
        ],
      },
    ],
    '@typescript-eslint/no-unsafe-member-access': ['off'],
    '@typescript-eslint/no-unsafe-assignment': ['warn'],
    '@typescript-eslint/no-unsafe-return': ['off'],
    'class-methods-use-this': ['warn'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'vue/attributes-order': [
      'warn',
      {
        // "order": [
        //   "DEFINITION",
        //   "LIST_RENDERING",
        //   "CONDITIONALS",
        //   "RENDER_MODIFIERS",
        //   "GLOBAL",
        //   "UNIQUE",
        //   "TWO_WAY_BINDING",
        //   "OTHER_DIRECTIVES",
        //   "OTHER_ATTR",
        //   "EVENTS",
        //   "CONTENT"
        // ],
        alphabetical: true,
      },
    ],
    'import/order': ['error', { alphabetize: { order: 'asc', caseInsensitive: true } }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'linebreak-style': ['off'],
    semi: ['error', 'never'],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-shadow': ['warn'],
    'import/prefer-default-export': ['off'],

    'unicorn/prevent-abbreviations': ['off'],
    'unicorn/filename-case': ['off'],
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    // #endregion
  },

  globals: {
    process: 'readonly',
  },
}
