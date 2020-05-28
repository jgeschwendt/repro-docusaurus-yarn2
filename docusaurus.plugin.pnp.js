const PnpWebpackPlugin = require('pnp-webpack-plugin');

module.exports = () => {
  return {
    configureWebpack() {
      return {
        resolve: {
          plugins: [
            PnpWebpackPlugin,
          ],
        },
        resolveLoader: {
          plugins: [
            PnpWebpackPlugin.moduleLoader(module),
          ],
        },
      };
    },
    name: 'docusaurus-plugin-yarn-pnp',
  };
};
