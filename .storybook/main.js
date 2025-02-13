/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    // Remove any existing CSS rules
    config.module.rules = config.module.rules.filter(
      (rule) => !rule.test?.test?.('.css')
    );

    // Add our custom CSS rules
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
      ],
      sideEffects: true,
    });

    // Handle Shoelace assets
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      type: 'asset/resource',
      generator: {
        filename: 'assets/[name][ext]',
      },
    });

    return config;
  },
  docs: {
    autodocs: true
  },
  // Add this for GitHub Pages
  baseUrl: '/storybook-shoelace/',
};

export default config;
