<template>
<div class="content">
    <div class="content infinite-scroll infinite-scroll-bottom" data-distance="100">
        <div class="list-block">
            <ul class="list-container">
                <li v-for="i in finalCount" class="item-content"><div class="item-inner"><div class="item-title">Item {{i}} </div></div></li>
            </ul>
        </div>
        <!-- 加载提示符 -->
        <div v-if="loading" class="infinite-scroll-preloader">
            <div class="preloader"></div>
        </div>
    </div>
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
    ,mounted: function () {
        var maxItems = 100;
        var self = this
        $(window).on('click', function() {
            if (self.loading) return;
            self.loading = 1;

            // 模拟1s的加载过程
            setTimeout(function() {
                self.loading = 0;

                if (self.finalCount >= maxItems) {
                    return;
                }
                self.count++
            }, 500);
        });
    }
    ,methods: {
    }
}
</script>

<style scoped>

</style>
