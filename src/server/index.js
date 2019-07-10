import _ from 'lodash'
import axios from 'axios'
// import store from '../store'
// import { SERVER_ERROR } from '../store/mutation_types'

const errorType = {
  code_401: '当前请求需要用户验证',
  code_403: '缺少权限',
  code_404: '请求地址不存在',
  code_405: '请求方法类型错误，请尝试其他类型的请求',
  code_500: '服务器发生为止错误',
  code_501: '服务器不支持当前请求所需要的某个功能',
}

export default async (url, requestData = {}, type = 'post') => {
  const method = _.toLower(type) // 转小写
  // 发送 POST 请求
  try {
    const {
      data,
      // status,
      // statusText, // `statusText` 来自服务器响应的 HTTP 状态信息 default: OK
      // `headers` 服务器响应的头
      // headers,
      // `config` 是为请求提供的配置信息
      // config,
      // 'request'
      // `request` is the request that generated this response
      // It is the last ClientRequest instance in node.js (in redirects)
      // and an XMLHttpRequest instance the browser
      // request,
    } = await axios({ method, url, requestData });
    // TODO 数据处理
    return data
  } catch (error) {
    if (error.response) {
      // 服务器返回错误状态码，触发server_error 错误
      // TODO 这里引用store 不知道好不好
      const { response } = error;
      response.title = errorType[`code_${response.status}`] || errorType.code_500
      // store.dispatch(SERVER_ERROR, response);
    } else if (error.request) {
      // 请求已经发出，但是没有收到响应 error.request是xmlhttprequest的一个实例
      error.request.title = '服务器响应超时'
      // store.dispatch(SERVER_ERROR, error.request);
    } else {
      error.title = '未知错误'
      // store.dispatch(SERVER_ERROR, error);
    }
    return null
  }
}
