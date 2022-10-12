module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended"
  ],
  plugins: ["react", "prettier", "@typescript-eslint", "jest", "import"],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'prettier/prettier': 'error',
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.stories.*",
          "**/.storybook/**/*.*"
        ],
        "peerDependencies": true
      }
    ]
  }
};