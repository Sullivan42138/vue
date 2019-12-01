export const baseURL = process.env.NODE_ENV === 'production'
  ? 'http://production'
  : 'http://localhost:4000' //如果在vue.config.js当中没有配置代理的时候，则需要在这里写上对于服务端的地址

