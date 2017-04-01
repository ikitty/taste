import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/:filter?', name: 'List', component: List },
        { path: '*',  redirect: '/all' }
    ]
})
