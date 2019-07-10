import Vue from 'vue'
import Router from 'vue-router'
// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'

Vue.use(Router)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue'),
  },
]

export default new Router({
  routes, // (缩写) 相当于 routes: routes
})

// const requireComponent = require.context( // 获取pages下面的所有文件
//   // 其组件目录的相对路径
//   '../pages',
//   // 是否查询其子目录
//   true,
//   // 匹配基础组件文件名的正则表达式
//   /[A-Z]\w+\.(vue|js)$/,
// )

// requireComponent.keys().forEach((fileName) => {
//   // 获取组件的 PascalCase 命名
//   const componentPath = fileName.replace(/\.\w+$/, '').replace(/^\.?/, '')
//   const componentName = upperFirst(
//     camelCase(
//       // 获取和目录深度无关的文件名
//       fileName.replace(/\.\w+$/, ''),
//     ),
//   )

//   const pageName = upperFirst(
//     camelCase(
//       // 获取和目录深度无关的文件名
//       fileName
//         .split('/')[1]
//         .replace(/\.\w+$/, ''),
//     ),
//   )

//   // 添加到路由
//   routes.push({
//     path: componentPath,
//     name: componentName,
//     component: () => import(/* webpackChunkName: "[request]" */ `../pages/${fileName}`),
//     component: r => require.ensure([], () => r(require('../pages/Home.vue')),'home')
//   })
// })
