<script setup>
import { ref, defineComponent } from "vue"
import { RouterLink, useRouter } from "vue-router"
import defineStore from "../stores/user.js"

//conectar los inputs del formulario 
const userStore = defineStore();

const router = useRouter();

let email = ref("")
let password = ref("")

const logIn = async () => {
  try {
    await userStore.signIn(email.value, password.value);
    router.push("/")
    // Si la función signUp se ejecuta sin errores, significa que el usuario ha sido registrado correctamente en Supabase.
  } catch (error) {
    console.error(error);
    // Si la función signUp genera un error, lo estamos mostrando en la consola por ahora.
  }
};
</script>

<template>
  <div class="formBox app-container">
    <h1 class="app-header">Please log into your account</h1>
    <div class="inputContainer">
      <label class="form-label" for="email">Email:</label>
      <input class="form-input" type="email" id="email" v-model="email">
    </div>
    <div class="inputContainer">
      <label class="form-label" for="password">Password:</label>
      <input class="form-input" type="password" id="password" v-model="password">
    </div>
    <div class="buttonContainer">
      <button class="login-button" @click="logIn">Sign In</button>
    </div>
    <p class="account-reminder">You don't have an account? <router-link to="/auth/sign-up" class="account-reminder link-reminder">Sign up</router-link></p>

  </div>
</template>

<style>
.formBox {
  border: 2px;
  width: 200px;
}

.account-reminder{
  font-size: 0.7rem;
  margin-top: 1vw;
  text-decoration: none;
  color: rgba(89,74,97,255);
}

.link-reminder:hover{
  color: rgba(152,131,162,255);

}
</style>