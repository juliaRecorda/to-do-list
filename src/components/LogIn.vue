<script setup>
import { ref, defineComponent } from "vue"
import defineStore from "../stores/user.js"

//conectar los inputs del formulario 
const userStore = defineStore();

let email = ref("")
let password = ref("")

const logIn = async () => {
  try {
    await userStore.signIn(email.value, password.value);
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
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email">
    </div>
    <div class="inputContainer">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">
    </div>
    <div class="buttonContainer">
        <button @click="logIn">Login</button>
    </div>
    </div>

</template>

<style>
.formBox{
    border: 2px;
    width: 200px;
}
</style>