import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from "../views/AuthView.vue"
import SignInView from "../views/signInView.vue"
import SignUpView from "../views/signUpView.vue"
import UserStore from "../stores/user.js"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        requiresAuth: true,
      },
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
      children: [
        {
          path: "sign-in",
          name: "signIn",
          component: SignInView
        },
        {
          path: "sign-up",
          name: "signUp",
          component: SignUpView
        },
      ]
    },
  ]
})

router.beforeEach(async(to) => {
  const store = UserStore()

  if (store.user === undefined) {
    await store.fetchUser()
  }

  console.log('beforeEach')
  console.log(store.user)
  
  if (to.meta.requiresAuth && store.user === null) {
    return { name: 'signIn' }
  }
  if ((to.name === 'signIn' || to.name === 'signUp') && store.user !== null) {
    return { name: 'home' }
  }
})
export default router
