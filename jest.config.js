module.exports = {
  rootDir: "./src",
  transform: {
    "^.+\\.(ts|js)x?$": "ts-jest"
  },
  testPathIgnorePatterns: ['/node_modules/', '/src/context/__mocks__'],
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  "moduleNameMapper": {
    "^@context(.*)$": "<rootDir>/src/context$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetsTransformer.js", "\\.(css|less)$": "<rootDir>/assetsTransformer.js"
  }
};
