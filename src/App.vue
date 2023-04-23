<script>
import { RouterLink, RouterView } from "vue-router"
import { mapActions } from "pinia"
import UserStore from "./stores/user.js"
export default {
  name: "App",
  components: {
    RouterLink,
    RouterView,
  }, 
  methods: {
    ...mapActions(UserStore, ["fetchUser"])
  },
  async created() {
    await this.fetchUser()
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125"/>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">To Do List</RouterLink>
        <RouterLink to="/auth/sign-in">Sign In</RouterLink>
        <RouterLink to="/auth/sign-up">Sign Up</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView/>
</template>

<style scoped>
</style>
