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

            if (error) {
                console.error(error)
                return;
            }

            const index = this.tasksList.findIndex((task) => task.id === id)
            if (index > -1) {
                this.tasksList[index].title = title
            }
        },

        async _completeTask(is_complete, id) {
            const { error } = await supabase
                .from('tasks')
                .update({ is_complete })
                .eq('id', id)

            if (error) {
                console.error(error)
                return;
            }

            const index = this.tasksList.findIndex((task) => task.id === id)
            if (index > -1) {
                this.tasksList[index].is_complete = is_complete
            }
        },

        // crear una nueva función como la de arriba pero pasar como parámetro "is completed" en vez de title 

        // revisar metodo editar tarea falta algo en linea 41
        // si supabase me dice que no hay error => busco en la lista de tarea cual se ha editado y busco con el id cual se ha editado y la que encuentro es la que actualizo el título (cambiar el campo title)
        // eliminar: buscar la tarea eliminada en supabase y sacarla de la lista 
        //cuando elimino hago otro fech 
        //pasarle a _deleteTask el indice en el que esta en la lista de tareas [0]
        // splice 

        // async _deleteTask(id) {
        //     const { error } = await supabase
        //         .from('tasks')
        //         .delete()
        //         .eq('id', id)
        // }

        async _deleteTask(id) {
            const { error } = await supabase
                .from('tasks')
                .delete()
                .eq('id', id)

            if (error) {
                console.error(error)
                return;
            }

            const index = this.tasksList.findIndex((task) => task.id === id)

            this.tasksList.splice(index, 1)
        }


    }
})



