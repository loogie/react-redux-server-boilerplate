const path = require('path');
const rootPath = path.normalize(__dirname + '/../..');
const env = process.env.NODE_ENV || 'development';

let config = {
  development: {
    root: rootPath,
    app: {
      name: 'app-name'
    },
    port: process.env.PORT || 3000,
    db: {db:'salr_api_development'}
  },
  test: {
    root: rootPath,
    app: {
      name: 'app-name'
    },
    port: process.env.PORT || 3000,
    db: {db:'salr_api_test'}
  },
  production: {
    root: rootPath,
    app: {
      name: 'app-name'
    },
    port: process.env.PORT || 3000,
    db: {db:'salr_api_production'}
  }
}

module.exports = config[env];
