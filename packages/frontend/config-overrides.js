const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@progress/api/*': './node_modules/@progress/api/dist/*',
    '@progress/api': './node_modules/@progress/api/dist',
    'class-transformer': 'node_modules/@progress/api/node_modules/class-transformer',
    'class-validator': 'node_modules/@progress/api/node_modules/class-validator',
  })(config);

  return config;
};

// TODO: not working. why ?
/*
const { alias, configPaths } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias(configPaths())(config);

  // or with spread and custom config file
  alias({
    ...configPaths('tsconfig.paths.json'),
  })(config);

  return config;
};
*/
