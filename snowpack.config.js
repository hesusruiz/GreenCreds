// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/',
    public: {
        url: '/',
        dot: true,
        static: true,
        resolve: false
    }
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  optimize: {
    minify: false,
    bundle: false,
    treeshake: false,
  },
  buildOptions: {
    /* ... */
    out: "docs",
    baseUrl: "/GreenCreds/"
  },
};
