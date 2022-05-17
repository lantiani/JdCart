<template>
  <div>
    <van-submit-bar :price="$store.getters.watchPrice" button-text="提交订单" >
      <van-checkbox :value="$store.getters.isCheckedAll" @click="checkeds($store.getters.isCheckedAll)">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  name: 'SubmitBar',
  methods:{
    checkeds(checkedAll) {
      this.$store.commit('isCheckedAlls',{checkedAll});
    }
  }
}
</script>

<style>
</style>