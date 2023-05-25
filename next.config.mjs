/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
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
    if (!isServer) {
      config.module.rules.push({
        test: /\.wasm$/,
        type: 'webassembly/experimental',
        include: [/node_modules\/onnxruntime-web\/dist/], // Include WebAssembly files from onnxruntime-web/dist/
      });
    }
    return config;
  },

    async rewrites() {
    return [
      {
        source: "/static/wasm/:path*",
        destination: "/_next/static/wasm/:path*",
      },
    ];
  },
};
export default config;
