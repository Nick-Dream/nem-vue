/**
 * 定义mock数据
 * url： 需要mock的路径
 * response: 如果定义了response函数就直接返回函数返回值，优先级大于proxy
 * proxy：mock数据的模板，注意 ../
 * handle: 如果有后置处理函数，就在处理一遍，针对一个json模板多个返回
 *    reqBody: 请求参数
 *    res: 模板mock之后的数据
 */
module.exports = [
  {
    url: '/servers/getMenu',
    // response: () => ({}),
    proxy: './mock/json/menu.json',
    handle: (reqBody, res) => {
      res.test = '测试数据'
      return res;
    },
  },
  {
    url: '/servers/getHome',
    // response: () => ({}),
    proxy: './mock/json/menu.json',
    handle: (reqBody, res) => {
      res.test = '测试数据123'
      return res;
    },
  },
]
