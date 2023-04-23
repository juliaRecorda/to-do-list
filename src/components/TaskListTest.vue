<!-- <template>
    <table class="table" v-if="tasksByInsertedDate.length">
        <thead>
            <tr>
                <th scope="col" v-for="column in tableColumns" :key="column.key">{{ column.title }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(task, index) in tasksByInsertedDate" :key="task.id">
                <th scope="row">{{ index }}</th>
                <td class="text-start">{{ task.title }}</td>
                <td>{{ task.inserted_at }}</td>
                <td>
                    <label for="taskState">
                        {{ task.is.complete ? " 👍" : " 👎" }}
                        <input @click="$event => updateTaskCompleteState(task.id, !task.is_complete)" type="checkbox">
                            name="taskState" v-model="task.is_complete"/>
                    </label>
                </td>
                <td>
                    <div class="action--buttons">
                        <button v-for="action in actions" :key="action.id">
                            :class="action.class"

                        </button>
                    </div>

                </td>

            </tr>

        </tbody>

    </table>
</template> -->