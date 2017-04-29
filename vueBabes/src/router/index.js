import Vue from 'vue'
import Router from 'vue-router'

//@===..?
import Home from '@/views/Home'
import Card from '@/views/Card'
import Liebiao from '@/views/Liebiao'
import More from '@/views/More'

Vue.use(Router)

const r =new Router({
    routes: [
        { path: '/home', name: 'home', component: Home },
        { path: '/tasks', name: 'tasks', component: Card },
        { path: '/list', name: 'list', component: Liebiao },
        { path: '/more', name: 'more', component: More },
        { path: '/:filter?', name: 'other', component: Home },
        { path: '*',  redirect: '/all' }
    ]
})

const Bus = new Vue()

r.beforeEach(function (to, from, next) {
    console.log(`from ${from.path} to ${to.path}`)

    let toPath = to.path
    let fromPath = from.path
    if (toPath === '/more') {
        Bus.Zeus.$emit('changeIndex', 0)
    }else {
        Bus.Zeus.$emit('changeIndex', 1)
    }
    next()
})
r.afterEach(function (to, from, next) {
    console.log(`成功浏览到: ${to.path}`)
})
export default r
