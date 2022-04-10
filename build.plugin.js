const checkPostcssLoader = (config, ruleName) =>
  config.module.rules.has(ruleName) && config.module.rule(ruleName).uses.has('postcss-loader');

const tailwindcss = require('tailwindcss');
const { RaxTailwindcssWebpackPluginV5 } = require('weapp-tailwindcss-webpack-plugin');

module.exports = ({ context, onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    const rules = ['css', 'css-module', 'css-global', 'scss', 'scss-module', 'scss-global'];

    rules.forEach((rule) => {
      if (checkPostcssLoader(config, rule)) {
        config.module
          .rule(rule)
          .use('postcss-loader')
          .tap((options) => ({
            ...options,
            postcssOptions: {
              ...options.postcssOptions,
              plugins: [tailwindcss, ...options.postcssOptions.plugins],
            },
          }));
      }
    });

    // config.plugin('RaxTailwindcssWebpackPluginV5').use(RaxTailwindcssWebpackPluginV5);
  });
};
