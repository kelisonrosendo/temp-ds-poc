const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  css: {
    extract: false,
    // loaderOptions: {
    //   scss: {
    //     additionalData: `@import "@/styles/index.scss";`,
    //   },
    // },
  },
  transpileDependencies: ["vuetify"],
});
