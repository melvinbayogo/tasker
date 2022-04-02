import {createRouter, createWebHistory} from 'vue-router'
import AboutUs from '../views/AboutUsView.vue'
import Home from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/aboutUs',
        name: 'AboutUs',
        component: AboutUs
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router