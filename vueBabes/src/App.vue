<template>
  <div id="app">
    <Top @child-submit="submit" :org-value="orgValue"></Top>
    <router-view @child-remove="remove" :todo-list="filterList"></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
import Top from './components/Top'
import List from './components/List'
import Foot from './components/Foot'
import Store from './store'



export default {
    name: 'app',
    data: function () {
        return {
            orgValue: 'defaultValue'
            ,todoList: Store.fetch()
        } ;   
    }
    ,computed: {
        filterList: function () {
            var filter = this.$route.params.filter || 'all'
            console.log(filter) ;
            return this.filterData(filter) ;
        }
    }
    ,watch: {
        todoList: {
            deep: true
            ,handler: Store.save
        }
    }
    ,components: {
        Top,
        List,
        Foot
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

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
