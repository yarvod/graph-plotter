const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  devServer: {
    allowedHosts: "all"
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/variables.scss";
          @import "@/assets/scss/mixins.scss";
          @import "@/assets/scss/base.scss";
        `
      }
    }
  },
})
