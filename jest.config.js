module.exports = {
  rootDir: "./src",
  transform: {
    "^.+\\.(ts|js)x?$": "ts-jest"
  },
  testPathIgnorePatterns: ['/node_modules/', '/src/context/__mocks__'],
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  "moduleNameMapper": {
    "^@context(.*)$": "<rootDir>/src/context$1"
  }
};