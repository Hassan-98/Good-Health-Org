const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve("src"),
        "@comps": path.resolve("src/components"),
        "@pages": path.resolve("src/views"),
        "@scss": path.resolve("src/assets/scss"),
        "@css": path.resolve("src/assets/css"),
        "@js": path.resolve("src/assets/js"),
        "@imgs": path.resolve("src/assets/images"),
        "@fonts": path.resolve("src/assets/fonts")
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                @import "@/assets/scss/variables.scss";
                @import "@/assets/scss/mixins.scss";
                @import "@/assets/scss/reset.scss";
            `
      }
    }
  }
};
