<template>
<div class="content">
    more card content
    <router-link :to="{path:'tasks'}">
        返回
    </router-link>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            count:1,
            loading:0
        } ;
    }
    ,computed: {
        finalCount: function () {
            return 5 *(this.count+1)
        }
    }
    ,methods: {
    }
}
</script>

<style scoped>

</style>
