import { createRouter, createWebHistory } from 'vue-router'
import main from '@/components/main.vue'
import test from '@/components/TestOne.vue'
import testTwo from '@/components/TestTwo.vue'
import testTree from '@/components/TestTree.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/main' // Перенаправление с корня на /main
  },
  {
    path: '/main',
    name: 'main',
    component: main
  },
  {
    path: '/test',
    name: 'test',
    component: test
  }
  ,
  {
    path: '/testTwo',
    name: 'testTwo',
    component: testTwo
  }
  ,
  {
    path: '/testTree',
    name: 'testTree',
    component: testTree
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router