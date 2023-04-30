<script setup>
import { ref, defineComponent } from "vue"
// import { supabase } from "../supabase/index" // comentado xk me da error
import defineStore from "../stores/user.js"
import { useRouter } from "vue-router"

// const { signUp } = mapActions(userStore, ["signUp"]); 
const userStore = defineStore();
const router = useRouter();
//conectar los inputs del formulario 
let email = ref("")
let password = ref("")
// let passwordConfirmation =

//create Account function
const createAccount = async () => {
  try {
    await userStore.signUp(email.value, password.value);
    router.push("/");
    // Si la función signUp se ejecuta sin errores, significa que el usuario ha sido registrado correctamente en Supabase.
  } catch (error) {
    console.error(error);
  }
};
</script>


<template>
    <div class="formBox app-container">
        <h1 class="app-header">Please create an account</h1>
        <div class="inputContainer">
        <label class="form-label" for="email">Email:</label>
        <input class="form-input" type="email" id="email" v-model="email">
    </div>
    <div class="inputContainer">
        <label class="form-label" for="password">Password:</label>
        <input class="form-input" type="password" id="password" v-model="password">
    </div>
    <!-- <div class="inputContainer">
        <label for="passwordConfirmation">Confirm Your Password:</label>
        <input type="passwordConfirmation" id="passwordConfirmation" v-model="passwordConfirmation">
    </div> -->
    <div class="buttonContainer">
        <button class="login-button" @click="createAccount">Sign Up</button>
    </div>   
    </div>
</template>


<style></style>