var utils = require('./util')

module.exports = (isDev) => {
  return {
    preserveWhitepace: true,
    // extractCSS: !isDev,
    // cssModules: {
    //   localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
    //   camelCase: true
    // },
    loaders: utils.cssLoaders({
      sourceMap: true,
      extract: !isDev
    }),
    postcss: [
      require('postcss-px2rem')({remUnit: 75})
    ]
    // hotReload: false, // 根据环境变量生成
  }
}
