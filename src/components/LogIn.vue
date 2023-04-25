<script setup>
import { ref } from "vue"
import defineStore from "../stores/user.js"
import { mapActions, mapState } from "pinia"
// import { supabase } from "../supabase/index"

//conectar los inputs del formulario 
let email = ref("")
let password = ref("")

//login function
function logIn(){
    console.log("log in")
}

//create Account function
function createAccount(){
    console.log("create Account")
}
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