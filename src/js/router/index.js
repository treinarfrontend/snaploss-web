import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        name: 'app.login.index',
        path: '/entrar',
        component: () => import('@scripts/pages/entrar/Entrar')
    },
    {
        path: '/',
        component: () => import('@scripts/components/Layout'),
        children: [
            {
                name: 'app.home.index',
                path: '/',
                component: () => import('@scripts/pages/home/Home')
            },
            {
                name: 'app.animals.index',
                path: '/animais',
                component: () => import('@scripts/pages/home/Home')
            },
            {
                name: 'app.account.index',
                path: '/minha-conta',
                component: () => import('@scripts/pages/home/Home')
            }
        ]
    }
]

const router = new VueRouter({
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-active',
    routes
})

export default router