<template>
<div class="">
    <Top @child-submit="submit" :org-value="orgValue"></Top>

    <List @child-remove="remove" :todo-list="filterList"></List>
    <Foot></Foot>
</div>
</template>

<script>
import Store from '@/store'

import Top from '../components/Top'
import List from '@/components/List'
import Foot from '../components/Foot'

export default {
    data: function () {
        return {
            orgValue:'add sth',
            todoList: Store.fetch(),
            filter: 'all'
        } ;   
    }
    ,components: {
        Top,Foot,List
    }
    ,computed: {
        filterList: function () {
            return this.filterData(this.filter) ;
        }
    }
    ,watch: {
        todoList: {
            deep: true
            ,handler: Store.save
        }
    }
    ,mounted(){
        var self = this
        this.Zeus.$on('foot-filter', function (filter) {
            self.filter = filter 
        })
    }
    ,methods: {
        submit: function (data) {
            console.log('parent should submit', data) ;
            this.todoList.push({ title: data, completed: false})
        }
        ,remove: function (data) {
            console.log('parent remove', data) ;
            this.todoList.splice(this.todoList.indexOf(data),1)
        }
        ,filterData: function (type) {
            var ret ;
            switch(type) {
                case 'all':
                    ret = this.todoList 
                    break;
                case 'active':
                    ret = this.todoList.filter((k) => !k.completed)
                    break;
                case 'completed':
                    ret = this.todoList.filter((k) => !!k.completed)
                    break;
                
                default:
                    ret = this.todoList 
            }
            return ret ;
        }
    }
}
</script>

<style scoped>
</style>
