export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    props: true,
    component: () => import(/* webpackChunkName: "todo-view" */ '../views/home/home.vue') // 添加一段注释
  },
  {
    path: '/hire',
    name: 'hire',
    props: true,
    component: () => import(/* webpackChunkName: "todo-view" */ '../views/hire/hire.vue') // 添加一段注释
  },
  {
    path: '/publish',
    name: 'publish',
    props: true,
    component: () => import(/* webpackChunkName: "todo-view" */ '../views/publish/publish.vue') // 添加一段注释
  },
  {
    path: '/message',
    name: 'message',
    props: true,
    component: () => import(/* webpackChunkName: "todo-view" */ '../views/message/message.vue') // 添加一段注释
  },
  {
    path: '/my',
    name: 'my',
    props: true,
    component: () => import(/* webpackChunkName: "todo-view" */ '../views/my/my.vue') // 添加一段注释
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login-view" */ '../views/login/login.vue')
  }
]
