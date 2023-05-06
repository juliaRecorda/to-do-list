<script setup>
import { useRouter } from 'vue-router';
import defineStore from "@/stores/user.js"

const router = useRouter()
const userStore = defineStore()
const handleSignOut = async () => {
  await userStore.signOut()
  router.push({name: "signIn"})
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
        <button @click="handleSignOut" class="router-link router-button">Sign Out</button>
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
  width: 50vw;
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

.router-butoon
.logo{
  width: 30px;
  height: 30px;
}


@media (max-width: 768px){


  .navBar{
    justify-content: space-around ;
    width: 60vw;

  }

  .router-link{
    padding-left: 30px;
  }

}

@media (max-width: 505px){
  .router-link{
    font-size: 1rem;
  }

}


@media (max-width: 480px){

  .navBar{
    justify-content: space-around ;
    width: 55vw;

  }

  .router-link{
    padding-left: 20px;
  }
	
}
</style>
