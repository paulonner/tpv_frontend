const routes = [
  {
    path: '/usuarios',
    name: 'Users',
    component: () => import('@/views/administration/user/Users.vue')
  }
]

export default routes
