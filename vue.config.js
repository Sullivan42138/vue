const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
// es6 简写
// 多个参数的写法（dir,aaa）
// const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin' : '/'
module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    // 配置表示@ 代表的就是项目的src路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成map文件
  productionSourceMap: false,
  // 跨域的配置
  devServer: {
    // 写代理的url,也就是将任何未匹配到静态文件的请求都匹配到这个地址
    // proxy: 'http://localhost:4000'
  }
}
