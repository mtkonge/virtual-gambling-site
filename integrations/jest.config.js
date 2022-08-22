/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  reporters: [
    "default",
    [
      "jest-junit", 
      {
        suiteName: "jest tests"
      }
    ]
  ],
  errorOnDeprecated: true,
};
