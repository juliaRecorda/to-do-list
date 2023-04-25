// supabase.aut.getuser

import { defineStore } from "pinia";
import supabase from "../supabase"
export default defineStore("user", {
    state:() => {
        return {
            user:null,
        }
    }, 
    actions: {
        async fetchUser(){
            const { data: { user } } = await supabase.auth.getUser()
            this.user = user
        },
        async signUp(email, password) {
            const { user, error } = await supabase.auth.signUp({
              email: email,
              password: password
            });
            if (error) {
              throw error;
            }
            this.user = user;
          },
          async signIn(email, password) {
            const { user, error } = await supabase.auth.signIn({
              email,
              password,
            });
            if (error) {
              throw error;
            }
            this.user = user;
          },
        },
      });
 
          