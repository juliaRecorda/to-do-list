<script>
import ToDoStore from "../stores/tasks"
import { mapActions, mapState } from "pinia"
export default {
  name: "HelloWorld",
  data () {
    return {
      newTaskTitle: "",
    }
  },
  computed: {  
    ...mapState(ToDoStore, ["taskList"] )
  },
  methods: {
    ...mapActions(ToDoStore, ["_fetchAllTasks", "_addNewTask"]),
  },
  created(){
    console.log("Created HelloWorld ")
    this._fetchAllTasks()
  },
  mounted(){
    this._addNewTask({title:"New Task", userId:"439fe0b6-a7f8-4263-98d9-a126040f6e12"})
  },
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <p v-for="todo in taskList" :key="todo.id">{{ todo.title }}</p>
    <input type="text" value="">
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
 

@media (min-width: 1024px) {
}
</style>
