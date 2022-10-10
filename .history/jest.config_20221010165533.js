/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/support/setupTests.js"
  ],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  "moduleNameMapper": {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "src/(.*)$": "<rootDir>/src/$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/file-mock.ts",
    "\\.(css|less)$": "<rootDir>/src/__mocks__/style-mock.ts"
  }
};