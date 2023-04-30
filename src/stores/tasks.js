import { defineStore } from "pinia"
import supabase from "../supabase/index"

export default defineStore("tasks", {
    state() {
        return {
            tasksList: [],
        }
    },
    actions: {
        async _fetchAllTasks() {
            const { data, error } = await supabase
                .from('tasks')
                .select()

            if (error) {
                console.error(error)
                return
            }
            console.log(data)
            this.tasksList = data;
        },
        async _addNewTask({ title, userId }) {
            console.log(title, userId)
            const { data, error } = await supabase
                .from('tasks')
                .insert({ title, user_id: userId })
                .select()
            if (error) {
                console.error(error)
                return;
            }

            console.log(data[0])

            this.tasksList.push(data[0])
            console.log(`test Task ${this.tasksList}`)
        },

        async _editTask(title, id) {
            const { error } = await supabase
                .from('tasks')
                .update({ title })
                .eq('id', id)
        },

        async _deleteTask(id) {
            const { error } = await supabase
                .from('tasks')
                .delete()
                .eq('id', id)
        }

    }
})



