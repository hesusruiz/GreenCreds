// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
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
