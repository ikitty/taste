<template>
<div id="app" class="page page-current">
    <bar v-if="isIndex">
        <bar-item path="/home" icon="home">首页</bar-item>
        <bar-item path="/tasks" icon="tasks">任务</bar-item>
        <bar-item path="/list" icon="mytask">列表</bar-item>
        <bar-item path="/more" icon="more">更多</bar-item>
    </bar>
    <transition name="fade" mode="out-in">
        <router-view class="fade"></router-view>
    </transition>
</div>
</template>

<script>
import Bar from './components/Bar'
import BarItem from './components/BarItem'


export default {
    name: 'app',
    data: function () {
        return {
            isIndex: 1
        } ;   
    }
    ,created(){
        // console.log('creat') ;
    }
    ,mounted(){
        // console.log('mounted') ;
    }
    ,components: {
        Bar, BarItem
    }
}
</script>

<style>
@import './assets/css/sm.css';
h1 {
  /*fade-leave-active fade-leave-to*/
  /*fade-enter-active fade-enter-to*/
}
.fade {transition: all 0.3s ease;}
.fade-leave-active {opacity:0.0}
.fade-enter-active {opacity:1}
</style>
