<script setup>
import { ref, defineComponent } from "vue"
import defineStore from "../stores/user.js"
import { useRouter } from "vue-router"

const userStore = defineStore();
const router = useRouter();
let email = ref("")
let password = ref("")

const createAccount = async () => {
  try {
    await userStore.signUp(email.value, password.value);
    router.push("/");
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
    <div class="buttonContainer">
        <button class="login-button" @click="createAccount">Sign Up</button>
    </div>   
    </div>
</template>


<style></style>