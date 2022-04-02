<template>
<header>
    <h1>{{ title }}</h1>
    <MainButton v-if="homePage" @btn-click="$emit('toggle-add-task')" :text="showAddTask ? 'Close' : 'Add Task'" :color="showAddTask ? 'red' : 'green'"/>
</header>
</template>

<script>
import MainButton from '../components/MainButton.vue'

export default {
    name: 'MainHeader',
    props: {
        title: {
            type: String,
            default: 'Hello World',
        },
        showAddTask: Boolean
    },
    components: {
        MainButton,
    },
    computed: {
        homePage() {
            if(this.$route.path == '/') {
                return true
            }else{
                return false
            }
        }
    }
}
</script>

<style scoped>
    
</style>