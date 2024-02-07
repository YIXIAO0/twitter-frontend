const CracoAlias = require("craco-alias");

// webpack's configurations
module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        baseUrl: './src',
        source: 'jsconfig'
      }
    }
  ]
};