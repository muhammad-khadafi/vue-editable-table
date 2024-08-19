import { createRouter, createWebHistory } from "vue-router";



const routes = [
    {
        path: '/',
        name: 'Home',
        component: ()=>import(/*webpackChunkName:"editabletable"*/ '../pages/EditableTable.vue')
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

