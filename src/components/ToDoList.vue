<script setup>
import { ref, defineComponent } from "vue"
import defineStore from "../stores/tasks.js"
import { mapActions, mapState } from "pinia" 
</script>

<template>
    <div class="app-container" id="tasklist">
        <h1 class="app-header">TO DO LIST</h1>
        <div class="add-task">
            <input type="text" placeholder="Add New Task" class="task-input">
            <input type="submit" value="" class="submit-task" title="Add Task">
        </div>
        <ul class="task-list">
            <li class="task-list-item">
                <label class="task-list-item-label">
                    <input type="checkbox">
                    <span>Task</span>
                </label>
                <span class="delete-btn" title="Delete Task"></span>
            </li>
        </ul>
    </div>
</template>