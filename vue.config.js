const path = require('path')
module.exports = {
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
