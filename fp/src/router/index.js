import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "../views/Dashboard";
import CostAdding from "../views/CostAdding";


Vue.use(VueRouter)

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/add/payment',
        name: 'add',
        component: CostAdding
    },
    {
        path: '/add/payment/:category',
        name: 'add',
        component: CostAdding
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})


export default router
