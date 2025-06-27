import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { ROUTES } from '@/shared/router'
import { FeedPage } from '@/pages/feed'
import { SignInPage } from '@/pages/sign-in'
import { SignUpPage } from '@/pages/sign-up'
import { ResetPasswordPage } from '@/pages/reset-password'
import { AuthLayout, DefaultLayout } from '@/widgets/layouts'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: ROUTES.SIGN_IN,
  },
  {
    path: '',
    component: DefaultLayout,
    children: [
      {
        path: ROUTES.FEED,
        component: FeedPage,
        name: 'feed',
      },
    ],
  },
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: ROUTES.SIGN_IN,
        component: SignInPage,
        name: 'sign-in',
      },
      {
        path: ROUTES.SIGN_UP,
        component: SignUpPage,
        name: 'sign-up',
      },
      {
        path: ROUTES.RESET_PASSWORD,
        component: ResetPasswordPage,
        name: 'reset-password',
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
