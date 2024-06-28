module.exports = {
  preset: 'react-native',
  setupFiles: ['@testing-library/react-native'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
};
