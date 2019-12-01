// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import {baseURL} from '@/config'

class HttpRequest {
  // eslint-disable-next-line no-undef
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  //相当于以下的写法
  // constructor (baseUrl) {
  //   baseUrl = baseUrl || baseURL
  //   this.baseUrl = baseUrl
  //   this.queue = {}
  // }
  getInsideConfig () {
    const config = {
      //全局当中需要使用的一些配置，写在此处
      baseUrl: this.baseUrl,
      header: {
        //
      }
    }
    return config
  }
  //全局请求和拦截的拦截器
  interceptor (instance, url){
    //请求拦截器
    instance.interceptors.request.use(config => {
     //添加哟个全局的loading
      //Spin组件可以产生一个全局的遮罩层，是无法进行页面的点击操作的
      //Spin.show()
      //Object.keys()获取队列当中所有的属性名
      if (!Object.keys(this.queue).length) {
        //Spin.show()
      }
      this.queue[url] = true
      console.log(config)
      return config
    }, error => {
      //如果出现错误则将错误直接返回
      return Promise.reject(error)
    })
    //响应拦截器
    instance.interceptors.response.use(res => {
      console.log(res)
      delete  this.queue[url]
      //对结果进行处理
      const { data, status } = res
      return  { data, status }
    }, error => {
      delete  this.queue[url]
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance =  axios.create()
    //assigin会将两个对象合并成一个对象
    //如果两个对象内部有同样属性的值，会用后面对象的属性作为最终的属性值
    options = Object.assign(this.getInsideConfig(), options)
    //调用定义的拦截器，这样就会给创建的实例做定义的拦截
    this.interceptor(instance,options.url)
    return instance(options)
  }
}
export default HttpRequest
