<template>
    <div class="flex items-center justify-center m-4">
        <div class="container-box">
            <MainHeader @toggle-add-task="toggleAddTask" title="Task Tracker" :showAddTask="showAddTask" />
            <router-view :showAddTask="showAddTask"></router-view>
            <FooterComponent />
        </div>
    </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
    name: 'App',
    components: {
        MainHeader,
        FooterComponent
    },
    data() {
        return {
            showAddTask: false
        }
    },
    methods: {
        toggleAddTask() {
            this.showAddTask = !this.showAddTask
        }
    }
}
</script>

<style>

</style>
