export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    props: true,
    // props: (route) => ({ id: route.query.b }),
    component: () => import(/* webpackChunkName: "todo-view" */ '../views/home/home.vue'), // 添加一段注释
    name: 'home'
  },
  {
    path: '/hire',
    props: true,
    // props: (route) => ({ id: route.query.b }),
    component: () => import(/* webpackChunkName: "todo-view" */ '../views/hire/hire.vue'), // 添加一段注释
    name: 'hire'
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login-view" */ '../views/login/login.vue')
  }
]
