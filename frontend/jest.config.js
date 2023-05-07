// You can learn more about each option below in the Jest docs: https://jestjs.io/docs/configuration.

module.exports = {
  collectCoverageFrom: [
    '**/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$':
      '<rootDir>/__mocks__/fileMock.js',

    // Handle module aliases
    '^~/components/(.*)$': '<rootDir>/src/common/components/$1',
    '^~/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^~/form/(.*)$': '<rootDir>/src/common/components/ui/forms/$1',
    '^~/schemas/(.*)$': '<rootDir>/src/common/schemas/$1',
    '^~/constants/(.*)$': '<rootDir>/src/common/constants/$1',
    '^~/styles/(.*)$': '<rootDir>/src/common/styles/$1',
    '^~/ui/(.*)$': '<rootDir>/src/common/components/ui/$1',
    '^~/hooks/(.*)$': '<rootDir>/src/common/hooks/$1',
    '^~/services/(.*)$': '<rootDir>/src/common/services/$1',
    '^~/config/(.*)$': '<rootDir>/src/common/config/$1',
    '^~/enum/(.*)$': '<rootDir>/src/common/enum/$1',
    '^~/utils/(.*)$': '<rootDir>/src/common/utils/$1',
    '^~/svg/(.*)$': '<rootDir>/src/common/components/svg/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  testEnvironment: 'jest-environment-jsdom',
};
