import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from '@/shared'
import { FeedPage } from '@/pages/feed'

const routes = [{ path: ROUTES.FEED, component: FeedPage }]

export const router = createRouter({
  routes,
  history: createWebHistory(),
})
