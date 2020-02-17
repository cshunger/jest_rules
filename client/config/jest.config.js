const path = require('path');
module.exports = { 
  rootDir: path.join(__dirname, '..'),
  testEnvironment: 'node',

  transform: {'^.+\\.jsx?$': 'babel-jest'},
  testMatch: ['<rootDir>/src/**/*.test.js']
};
