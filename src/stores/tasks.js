import { defineStore } from "pinia"
import supabase from "../supabase/index"

export default defineStore("tasks", {
    state() {
        return {
            tasksList: [],
        }
    }, 
    actions: {
        async _fetchAllTasks(){
            const { data, error } = await supabase
                .from('tasks')
                .select()

            if (error){
                console.error(error)
                return
            }   
            console.log(data) 
            this.taskList = data;
        }, 
        async _addNewTask({title, userId}){ 
            console.log(title, userId)
            const { data, error } = await supabase
                .from('tasks')
                .insert({ title, user_id: userId})
                .select()
                console.log(`console log data ${data}`)
                if (error) {
                    console.error(error)
                    return;
                }
                console.log("New task ===>", data)
                // console.log(`taskList ${taskList}`)
                this.taskList.push(...data)
        }
    }
})



