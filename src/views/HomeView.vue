<template>
    <AddTaskComponent v-if="showAddTask" @add-task="addTask"/>
    <TasksComponent @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
</template>

<script>
import TasksComponent from '../components/TasksComponent.vue'
import AddTaskComponent from '../components/AddTaskComponent.vue'

export default {
    name: 'HomeView',
    props: {
        showAddTask: Boolean
    },
    components: {
        TasksComponent,
        AddTaskComponent,
    },
    data() {
       return {
            tasks: [],
       }
    },
    methods: {
        async addTask(task) {
            const response = await fetch('api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task)
            })

            const data = await response.json()

            this.tasks = [...this.tasks, data]
        },
        async toggleReminder(id) {
            const taskToToggle = await this.fetchTask(id)
            const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
            const response = await fetch(`api/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(updateTask)
            })

            const data = await response.json()

            this.tasks = this.tasks.map(task => task.id == id ? { ...task, reminder: data.reminder } : task)
        },
        async deleteTask(id) {
            if(confirm('Are you sure you want to delete this?')) {
                const response = await fetch(`api/tasks/${id}`, {
                    method: 'DELETE',
                })

                response.status == 200 ? (this.tasks = this.tasks.filter(task => task.id != id)) : alert('Error deleting task')
            }
        },
        async fetchTasks() {
            const response = await fetch('api/tasks')
            const data = await response.json()
            return data
        },
        async fetchTask(id) {
            const response = await fetch(`api/tasks/${id}`)
            const data = await response.json()
            return data
        }
    },
    async created() {
        this.tasks = await this.fetchTasks()
    }
}
</script>

<style lang="scss" scoped>

</style>