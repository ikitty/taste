<template>
<header>
<h1 class="" @click="say" :msg="newTodo">welcome </h1>
    <input type="text" value="" @keyup.enter="submit" v-model="newTodo" autocomplete="off"/>
</header>
</template>

<script>
    export default {
        props: ['orgValue']
        ,data: function () {
            // this.Zeus.$on('x', function (id) { console.log('got event', id) ; });
            // this.Zeus.$emit('x', 3);
            return {
                newTodo: this.orgValue
            } ;
        }
        ,computed: {
            getV: function () {
                return 'vv' ;
            }
        }
        ,methods: {
            say: function () {
                console.log('hi') ;
            }
            ,submit: function () {
                this.newTodo && this.$emit('child-submit', this.newTodo)
                this.newTodo = ''
            }
        }
    }
</script>

<style scoped>
h1, h2 { font-weight: normal; }
h1 {font-size:16px;}

</style>
