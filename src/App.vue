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
  <header class="header">
    <img alt="Vue logo" class="logo" src="./assets/pinkCheck.png" width="125" height="125"/>
    <div class="wrapper">
      <nav class="navBar">
        <RouterLink to="/" class="router-link">To Do List</RouterLink>
        <RouterLink to="/auth/sign-in" class="router-link">Sign In</RouterLink>
        <RouterLink to="/auth/sign-up" class="router-link">Sign Up</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView/>
</template>

<style scoped>

.header{
  display:flex;
  margin-bottom: 30px;
  margin-left: 27vw;
  margin-right: 23vw;
  width: 50vw;
  

}
.navBar{
  display: flex;
  flex-wrap: wrap;
  width: 50vw;
  /* background-color: white; */
  justify-content: flex-start;
}

.router-link{
  padding-left: 40px;
  color: rgba(238,201,148,255);
  text-decoration: none;
  font-size: 1.2rem;
}

.router-link:hover{
  padding-left: 40px;
  color: white;
}
.logo{
  width: 30px;
  height: 30px;
}
</style>
