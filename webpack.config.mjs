import { dirname, join } from 'node:path';
import url, { URL } from 'node:url';

import HtmlBundlerPlugin from 'html-bundler-webpack-plugin';

const __filename = url.fileURLToPath(new URL(import.meta.url));
const __dirname = dirname(__filename);
const context = __dirname;

/**
 * @typedef {import('webpack').Module} Module
 * @typedef {import('webpack').Configuration} WebpackConfig
 * @typedef {import('webpack-dev-server').Configuration} DevServerConfig
 */

/**
 * @type {WebpackConfig & DevServerConfig}
 */
const webpackConfig = {
  context,
  output: {
    publicPath: 'auto',
    clean: true,
    filename: 'assets/js/[name].[contenthash].js',
    chunkFilename: 'assets/js/[name].[contenthash].js',
    cssFilename: 'assets/css/[name].[contenthash].css',
  },
  resolve: {
    alias: {
      '@src': join(context, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js/i,
      },
      {
        test: /\.s?css/i,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 0,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: 'sass-embedded',
              api: 'modern-compiler', // 'modern-compiler' since sass-loader v14.2.0
              warnRuleAsWarning: true, // Treats the @warn rule as a webpack warning.
              /**
               * @type {import('sass-embedded').Options<"sync"|"async">}
               */
              sassOptions: {
                style: 'expanded',
                quietDeps: true,
                silenceDeprecations: ['import'],
              },
            },
          },
        ],
      },
      {
        test: /\.svg/i,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new HtmlBundlerPlugin({
      entry: {
        index: {
          import: 'src/views/index.html',
          data: 'src/render-data/index.mjs',
        },
      },
      css: {
        test: /\.s?css/i,
        filename: 'assets/css/[name].[contenthash:9].css',
      },
      preprocessor: 'eta',
      data: {
        title: "The title from global data",
        lead: "You've successfully loaded global data!",
      },
      minify: false,
    }),
  ],
  optimization: {},
  devServer: {
    static: {
      directory: join(process.cwd(), 'public'), // Default. But the project doesn't use a directory with static files.
      publicPath: '/', // Default. See https://webpack.js.org/configuration/dev-server/#publicpath
      watch: false, // Disable watching the files served by the `static.directory`
    },
    hot: false,
    liveReload: true,
    watchFiles: ['src/**/*'],
  },
  watchOptions: {
    poll: true,
    // If you use require.context, webpack will watch your entire directory.
    // See https://webpack.js.org/configuration/dev-server/#devserverlivereload
    ignored: ['node_modules', 'dist'],
  },
};

export default webpackConfig;
