const path = require('path')
module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
     types.forEach(type =>
     addStyleResource(config.module.rule("less").oneOf(type))
     );
  },
  css: {
    loaderOptions: {
      less: {
        resources: [path.resolve(__dirname, './src/styles/common.less')]
      }
    }
  },
  devServer: {
    port: 8080,
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/local': {
        target: 'http://xxx',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/local': ''
        }
      }
    }
  }
}
function addStyleResource (rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/styles/common.less')]
    })
}
