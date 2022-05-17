<template>
    <div>
        <van-swipe-cell v-for="(item, index) in $store.state.goods" :key="item.id">
            <div class="div">
                <div class="check">
                    <van-checkbox v-model="$store.getters.isCheckeds[item.id]" @click="watchChecked(index, $store.getters.isCheckeds[item.id])">
                    </van-checkbox>
                </div>
                <van-card :num="item.count" :price="item.price | showPrice" :desc="item.concent" :title="item.title"
                    class="goods-card" thumb="https://img01.yzcdn.cn/vant/cat.jpeg">
                    <template #footer>
                        <van-stepper :value="item.count" theme="round" button-size="22" disable-input :name="index"
                            @change="inCount" />
                    </template>
                </van-card>
            </div>
            <template #right>
                <van-button square text="删除" type="danger" class="delete-button" />
            </template>
        </van-swipe-cell>
    </div>
</template>
<script>
export default {
    name: 'GoodsShop',
    data() { return {} },
    created() {},
    methods: {
        inCount(count, { name: index }) {
            this.$store.commit('inCounts', { count, index })
        },
        watchChecked(index, checked) {
            this.$store.commit('watchCheckeds', { index, checked })
        }
    },
    filters: {
        showPrice(price) {
            return price.toFixed(2);
        }
    }
}
</script>

<style lang="less" scoped>
@white: rgb(235, 231, 231);

.div {
    display: flex;
}

.goods-card {
    margin: 0;
    background-color: @white;
    flex: 10;
    border-radius: 10px;
}

.check {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
}

.delete-button {
    height: 90%;
    margin-top: 10px;
}
</style>