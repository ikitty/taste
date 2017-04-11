<template>
<div class="content">
    <div class="card">
        <div class="card-header">卡头</div>
        <div class="card-content">
            <div class="card-content-inner">
                头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。
            </div>
        </div>
        <div class="card-footer">
            <span class="">2017-04-03</span>
            <a href="#" target="_blank">更多</a>
        </div>
    </div>
</div>
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
    ,methods: {
    }
}
</script>

<style scoped>

</style>
