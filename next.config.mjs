/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';

await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  
   webpack: (config, { isServer }) => {
    // Only perform the following steps for the client-side bundle
    if (!isServer) {
      // Copy the WebAssembly files from node_modules to the output directory
      const patterns = [
        {
          from: path.join('node_modules/onnxruntime-web/dist/*.wasm'),
          to: 'static/wasm',
        },
      ];

      config.plugins.push(new CopyWebpackPlugin({ patterns }));
    }

    return config;
  },
};
export default config;
