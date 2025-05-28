const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('mkz')
      .test(/\.mkz$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  }
}