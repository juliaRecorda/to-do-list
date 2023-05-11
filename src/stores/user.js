// supabase.aut.getuser

import { defineStore } from "pinia";
import supabase from "../supabase"
export default defineStore("user", {
  state: () => {
    return {
      user: undefined,
    }
  },
  actions: {
    async fetchUser() {
      const { data: { user } } = await supabase.auth.getUser()
      this.user = user
    },
    async signUp(email, password) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        throw error;
      }
      this.user = data;
    },
    async signIn(email, password) {
      const { data: { user }, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        throw error;
      }
      this.user = user;
      console.log(this.user)
    },
    async signOut(){
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      this.user = null;
    }

  },
});









