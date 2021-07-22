module.exports = function (snowpackConfig, pluginOptions) {
    return {
      name: 'testplugin',
      async optimize({ buildDirectory }) {
        console.log("DIR ============>", buildDirectory)
      }
    };
  };