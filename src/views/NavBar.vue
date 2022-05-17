<template>
    <div>
        <div ref="nav" @click="onFocus()">
            <van-nav-bar title="购物车" left-arrow>
                <template #right>
                    <van-icon name="search" size="18" />
                </template>
            </van-nav-bar>
        </div>

        <div class="search" :style="{ 'z-index': isShow }">
            <van-search v-model="value" @blur="onBlur" :show-action="isShows" shape="round"
                placeholder="请输入搜索关键词" />
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            value: '',
            isShow: 0,
            isShows: false,
        }
    },
    methods: {
        onClickLeft() {
            Toast('返回');
        },
        onClickRight() {
            Toast('按钮');
        },
        onFocus() {
            this.isShow = 1;
            this.isShows = true;
        },
        onBlur() {
            this.isShow = 0;
            this.isShows = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.search {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: block;
    align-content: center;
    height: 49px;
}
</style>