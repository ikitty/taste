import Vue from 'vue'
import Router from 'vue-router'

//@===..?
import Home from '@/views/Home'
import Card from '@/views/Card'
import Liebiao from '@/views/Liebiao'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/home', name: 'home', component: Home },
        { path: '/tasks', name: 'tasks', component: Card },
        { path: '/list', name: 'list', component: Liebiao },
        { path: '/:filter?', name: 'other', component: Home },
        { path: '*',  redirect: '/all' }
    ]
})
