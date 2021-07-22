// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    env: {
        INSTALL_SW: true
    },
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
