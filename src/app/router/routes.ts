import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from '@/shared'
import { FeedPage } from '@/pages/feed'
import { SignInPage } from '@/pages/sign-in'

const routes = [
  {
    path: '/',
    children: [
      { path: ROUTES.FEED, component: FeedPage, name: 'feed' },
      { path: ROUTES.SIGN_IN, component: SignInPage, name: 'sign-in' },
    ],
    redirect: { path: ROUTES.SIGN_IN },
  },
]

export const router = createRouter({
  routes,
  history: createWebHistory(),
})
