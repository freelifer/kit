import Vue from 'vue'
import Router from 'vue-router'

// 懒加载
const HelloWorld = resolve => require(['@/components/HelloWorld'], resolve)


const Home = resolve => require(['@/views/home/Home'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
