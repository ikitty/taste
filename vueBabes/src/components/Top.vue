<template>
<header>
    <input type="text" value="" @keyup.enter="submit" v-model="newTodo" autocomplete="off"/>
</header>
</template>

<style scoped>
    header {padding:20px;}
    input {width:100%;height:35px;border:1px solid #ccc;padding:0 5px;} 
    input:focus {border-color:#39f;}
</style>
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
            submit: function () {
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
