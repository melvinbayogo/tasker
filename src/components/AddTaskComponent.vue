<template>
  <form @submit.prevent="addTask()" class="container-box mb-4">
    <div class="flex flex-col space-y-4">
        <div class="flex flex-col">
            <label for="task">Task</label>
            <input type="text" v-model="text" name="task" id="task" placeholder="Task" required>
        </div>
        <div class="flex flex-col">
            <label for="day">Day</label>
            <input type="text" v-model="day" name="day" id="day" placeholder="Day" required>
        </div>
        <div class="flex items-center space-x-2">
            <label for="reminder">Reminder</label>
            <input type="checkbox" v-model="reminder" name="reminder" id="reminder" placeholder="reminder">
        </div>
        <div class="flex items-center justify-end">
            <button class="px-4 py-2 bg-slate-500 text-white hover:bg-gray-400">Add Task</button>
        </div>
    </div>
  </form>
</template>

<script>
export default {
    name: 'AddTaskComponent',
    data() {
        return {
            text: '',
            day: '',
            reminder: false,
        }
    },
    methods: {
        addTask() {
            const newTask = {
                /* id: Math.floor(Math.random() * 100000), */
                text: this.text,
                day: this.day,
                reminder: this.reminder
            }

            this.$emit('add-task', newTask)

            this.text = ''
            this.day = ''
            this.reminder = false
        },
    }
}
</script>

<style>

</style>