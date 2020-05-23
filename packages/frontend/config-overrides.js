const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@progress/api/*': './node_modules/@progress/api/dist/*',
    '@progress/api': './node_modules/@progress/api/dist',
  })(config);

  return config;
};
