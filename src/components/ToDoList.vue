<script setup>
import { ref, computed } from "vue"
import useTaskStore from "../stores/tasks.js"
import useUserStore from "../stores/user"
// import { mapActions, mapState } from "pinia" 
const tasksStore = useTaskStore();
const userStore = useUserStore();
tasksStore._fetchAllTasks()
const newTaskTitle = ref("")
const tasks = computed(() => tasksStore.tasksList)

const addTask = () => {
	if (newTaskTitle.value.trim()) {
		tasksStore._addNewTask({ title: newTaskTitle.value.trim(), userId: userStore.user.id }) 
		newTaskTitle.value = ""
	}
}


const deleteTask = (taskId) => {
	tasksStore._deleteTask(taskId)
}

const editTask = (task) => {
	tasksStore._editTask(task.title, task.id)
	task.editing = false
}



const completeTask = (task) => {
	if (task.title.trim()) {
		tasksStore._completeTask(!task.is_complete, task.id)
		task.editing = false
	} else {
		deleteTask(task.id)
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
					<input :class="{ completed: task.is_complete}" type="checkbox" v-model="task.completed" @change="completeTask(task)">
				</label>
				<span v-if="!task.editing" @dblclick="task.editing = true" id="span-not-edited" :class="{ completed: task.is_complete, editing: task.editing }" contenteditable>{{ task.title }}</span>
				<input class="task-created" id="test" type="text" v-if="task.editing" v-model="task.title" @keydown.enter="editTask(task)">
				<button class="save-btn" v-if="task.editing" @click="editTask(task)">Save</button>
				<button @click="deleteTask(task.id)" class="delete-btn" title="Delete Task"></button>
			</li>
		</ul>
	</div>
</template>

<style>
.add-task {
	display: flex;
	align-items: center;
	margin-bottom: 20px;
}

.completed {
    color: rgba(89, 74, 97, 255);
    text-decoration: line-through rgba(89, 74, 97, 255);
  }


  #test{
	width: 100px;
	border-radius: 0%;
	border: 0px;
	padding-left: 5px;
	color: rgba(89, 74, 97, 255);
  }

  .save-btn{
	background-color: rgba(238,201,148,255);
	color: rgba(89,74,97,255);
	border: 0px;
	height: 20px;
	margin-top: 4px;
	

  }

.submit-task {
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


.test{
	background-color: red;
	width: 100px;
}

.submit-task:active {
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

.task-list-item input {
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

.task-list-item input.completed {
	background-size: 25px;
	border: 1px solid var(--checkbox-color);
}

#span-not-edited{
	outline: none;
}


.save-btn{
	width: 40px;
}


.delete-btn {
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
	border: 0px;
}
</style>