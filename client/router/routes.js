import home from '../views/home/home.vue'
import hire from '../views/hire/hire.vue'
import publish from '../views/publish/publish.vue'
import message from '../views/message/message.vue'
import my from '../views/my/index/my.vue'
import myCollect from '../views/my/collect/index.vue'
import detail from '../views/detail/index.vue'
import login from '../views/login/login.vue'

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
    component: hire // 添加一段注释
  },
  {
    path: '/publish',
    name: 'publish',
    props: true,
    component: publish
  },
  {
    path: '/message',
    name: 'message',
    props: true,
    component: message
  },
  {
    path: '/my',
    name: 'my',
    props: true,
    component: my
  },
  {
    path: '/my-collect',
    name: 'my-collect',
    props: true,
    component: myCollect
  },
  {
    path: '/detail',
    name: 'detail',
    props: true,
    component: detail
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]
