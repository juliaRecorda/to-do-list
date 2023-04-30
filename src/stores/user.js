// supabase.aut.getuser

import { defineStore } from "pinia";
import supabase from "../supabase"
export default defineStore("user", {
  state: () => {
    return {
      user: null,
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
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        throw error;
      }
      this.user = data;
      console.log(this.user)
    },
  },
});

