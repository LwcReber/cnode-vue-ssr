import home from '../views/home/home.vue'
export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/hire',
    name: 'hire',
    props: true,
    component: () => import('../views/hire/hire.vue') // 添加一段注释
  },
  {
    path: '/publish',
    name: 'publish',
    props: true,
    component: () => import('../views/publish/publish.vue') // 添加一段注释
  },
  {
    path: '/message',
    name: 'message',
    props: true,
    component: () => import('../views/message/message.vue') // 添加一段注释
  },
  {
    path: '/my',
    name: 'my',
    props: true,
    component: () => import('../views/my/index/my.vue') // 添加一段注释
  },
  {
    path: '/my-collect',
    name: 'my-collect',
    props: true,
    component: () => import('../views/my/collect/index.vue') // 添加一段注释
  },
  {
    path: '/detail',
    name: 'detail',
    props: true,
    component: () => import('../views/detail/index.vue') // 添加一段注释
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  }
]
