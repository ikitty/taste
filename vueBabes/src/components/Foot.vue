<template>
<footer>
    <a href="#/all">All</a>
    <a href="#/active">Active</a>
    <a href="#/completed">Completed</a>
</footer>
</template>

<script>
    export default {
        data: function () {
            return {
                newTodo: this.orgValue
            } ;
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
footer a {padding:0px 10px;color:#39f;text-decoration:none;}

</style>
