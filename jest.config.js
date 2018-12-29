module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'js'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '.(ts)': 'ts-jest',
  },
};
