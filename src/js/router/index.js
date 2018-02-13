import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        name: 'app.login.index',
        path: '/entrar',
        component: () => import('@scripts/pages/entrar/Entrar')
    }
]

const router = new VueRouter({
    routes
})

export default router