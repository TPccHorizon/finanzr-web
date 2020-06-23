import Vue from "vue";
import Router from 'vue-router'
import MainLayout from "@/views/MainLayout";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainLayout
        }
    ]
})
