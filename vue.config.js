const fs = require('mz/fs');
const Mock = require('mockjs')
const chalk = require('chalk')
const config = require('config-lite')('./config');
const requests = require('./mock')

/**
 *设置devServer的后置中间件，绑定在mock数据中定义的路由
 * @param {express} app express实例
 */
const before = (app) => {
  if (!config.mock || !requests.length) return
  app.use('/servers', (req, res, next) => { // 使用app.all是因为mock数据时不需要在意get还是post
    let i = 0;
    requests.forEach(async ({
      url, response, proxy, handle,
    }) => {
      if (req.baseUrl + req.path === url) {
        try {
          if (response) {
            return res.json(response()) // 如果定义了response函数就直接返回函数返回值
          }
          let data = await fs.readFile(proxy, 'utf-8');
          data = Mock.mock(JSON.parse(data)); // 动态import json文件
          if (handle) { // 如果有后置处理函数，就在处理一遍
            data = handle(req.body, data)
          }
          return res.json(data)
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(chalk(`mock数据定义错误：${error}`, 'red'));
          return res.json({}) // 意外情况就返回空
        }
      }
      i += 1;
      return null;
    })
    if (requests.length === i) { next(); }
  });
}

module.exports = {
  configureWebpack: {
    devServer: {
      before,
    },
  },
}
