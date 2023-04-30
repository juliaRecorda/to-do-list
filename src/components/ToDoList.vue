<script setup>
import { ref, computed } from "vue"
import useTaskStore from "../stores/tasks.js"
import useUserStore from "../stores/user"
// import { mapActions, mapState } from "pinia" 
const tasksStore = useTaskStore();
const userStore = useUserStore();

const newTaskTitle = ref("")
const tasks = computed(() => tasksStore.tasksList)

const addTask = () => {
    if (newTaskTitle.value.trim()) {
        tasksStore._addNewTask({ title: newTaskTitle.value.trim(), userId: "8a48e91d-5e26-4350-b7ea-270032264279" }) // acceder a user store (importarla) userStore.user.XX.id
    }
}

// const addTask = () => {
//     if (newTaskTitle.value.trim()) {
//         const user = userStore.user.value;
//         if (user && user.id) {
//             tasksStore._addNewTask({ title: newTaskTitle.value.trim(), userId: user.id })
//         }
//     }
// }

const deleteTask = (task) => {
    tasksStore._deleteTask(task.id)
}

const editTask = (task) => {
    tasksStore._editTask(task.title, task.id)
}

const updateTask = (task) => {
    if (task.title.trim()) {
        tasksStore._updateTask(task)
        task.editing = false
    } else {
        deleteTask(task)
    }
}
</script>

<template>
    <div class="app-container" id="tasklist">
        <h1 class="app-header">TO DO LIST</h1>
        <form class="add-task" @submit.prevent="addTask">
            <input type="text" v-model="newTaskTitle" placeholder="Add New Task" class="task-input">
            <button type="submit" class="submit-task" title="Add Task"></button>
        </form>
        <ul class="task-list">
            <li v-for="task in tasks" :key="task.id" class="task-list-item">
                <label class="task-list-item-label">
                    <input type="checkbox" v-model="task.completed" @change="updateTask(task)">
                    <span  v-if="!task.editing" @dblclick="editTask(task)">{{ task.title }}</span>
                    <input class="task-created" type="text" v-if="task.editing" v-model="task.title" @blur="updateTask(task)"
                        @keydown.enter="updateTask(task)">
                </label>
                <button @click="deleteTask(task.id)" class="delete-btn" title="Delete Task"></button>
            </li>
        </ul>
    </div>
</template>

<style>
.add-task{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.submit-task{
	width: 25px;
	height: 25px;
	flex-shrink: 0;
	border: none;
	/* background: var(--add-button-shadow); */
	color: #272727;
	background-image: url(../assets/add-icon.png);
	background-size: 30px;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 50%;
	cursor: pointer;
	box-shadow: 0 0 12px 0 var(--add-button-shadow);
}

.submit-task:active{
	width: 32px;
	height: 32px;
	flex-shrink: 0;
	border: none;
	background: var(--add-button-shadow);
	color: #272727;
	background-image: url(../assets/add-icon.png);
	background-size: 25px;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 50%;
	cursor: pointer;
	box-shadow: 0 0 12px 0 var(--add-button-shadow);
}

.task-list-item input{    
	width: 25px;
	height: 25px;
	border: 1px solid #272727;
	border-radius: 50%;
	background-image: url(../assets/pinkCheck.png);
	background-repeat: no-repeat;
	background-position: center;
	background-size: 0px;
	transition: 0.2s;
	margin-right: 8px;
	flex-shrink: 0;
	margin-top: 4px;
	appearance: none;
}

.task-list-item input:hover {
	border-color: var(----checkbox-color);
	box-shadow: 0 0 0 3px var(--checkbox-shadow);
}

.task-list-item input:checked {
	background-size: 25px;
	border: 1px solid var(--checkbox-color);
}



.delete-btn{
	margin-left: auto;
	margin-right: 5px;
	display: block;
	width: 25px;
	height: 25px;
	background-image: url(../assets/close.png);
	background-repeat: no-repeat;
	background-size: 16px;
	background-position: center;
	cursor: pointer;
	border-radius: 50%;
}
</style>