<template>
<div class="">
    <div class="content-block">
        <p class="buttons-row" @click="change">
            <span class="button" :class="{active: filter == 'all'}" data-filter="all">All</span>
            <span class="button" :class="{active: filter == 'active'}" data-filter="active">Active</span>
            <span class="button" :class="{active: filter == 'completed'}" data-filter="completed">Completed</span>
        </p>
    </div>
</div>
</template>

<script>
    export default {
        data: function () {
            return {
                filter: 'all'
            } ;
        }
        ,methods: {
            change: function (e) {
                //todo donot use DOMAPI
                this.filter = $(e.target).data('filter') || 'all'
                this.Zeus.$emit('foot-filter', this.filter)
            }
        }
    }
</script>

<style scoped>
footer {text-align:center;padding-top:10px;}
footer span {padding:0px 10px;color:#39f;text-decoration:none;}

</style>
