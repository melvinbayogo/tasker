<template>
    <div 
        @dblclick="$emit('toggle-reminder', task.id)" 
        :class="[task.reminder ? 'reminder' : '', 'task']"
    >
        <h3>
            {{ task.text }}
            <i @click="$emit('delete-task', task.id)" class="fa fa-times"></i>
        </h3>
        <p>{{ task.day }}</p>
    </div>
</template>

<script>
export default {
    name: 'TaskComponent',
    props: {
        task: Object,
    },
}
</script>

<style scoped>
.task {
    @apply bg-slate-200 m-1 py-2 px-4 cursor-pointer;
}
.task.reminder {
    @apply border-l-4 border-green-600;
}
.task h3 {
    @apply flex items-center justify-between
}
.fa-times {
    @apply text-red-600;
}
</style>