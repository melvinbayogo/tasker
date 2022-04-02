<template>
  <div v-for="(task, index) in tasks" :key="index">
      <TaskComponent @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" :task="task" />
  </div>
</template>

<script>
import TaskComponent from '../components/TaskComponent.vue'

export default {
    name: 'TasksComponent',
    props: {
        tasks: Array,
    },
    components: {
        TaskComponent,
    },
    emits: ['toggle-reminder', 'delete-task']
}
</script>

<style>

</style>