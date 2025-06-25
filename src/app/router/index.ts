import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from '@/shared/router'
import { FeedPage } from '@/pages/feed'
import { SignInPage } from '@/pages/sign-in'
import { SignUpPage } from '@/pages/sign-up'
import { ResetPasswordPage } from '@/pages/reset-password'

const routes = [
  {
    path: '/',
    children: [
      { path: ROUTES.FEED, component: FeedPage, name: 'feed' },
      { path: ROUTES.SIGN_IN, component: SignInPage, name: 'sign-in' },
      { path: ROUTES.SIGN_UP, component: SignUpPage, name: 'sign-up' },
      { path: ROUTES.RESET_PASSWORD, component: ResetPasswordPage, name: 'reset-password' },
    ],
    redirect: { path: ROUTES.SIGN_IN },
  },
]

export const router = createRouter({
  routes,
  history: createWebHistory(),
})
