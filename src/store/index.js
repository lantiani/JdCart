import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import createPersistedState from "vuex-persistedstate";
export default new Vuex.Store({
    strict:true,
    state: {
        checkeds: false,
        goods: [
            { id: 1, title: "南极臭袜子1", concent: "南极臭袜子流传千古1", price: 888.00, count: 1, checked: true },
            { id: 2, title: "南极臭袜子2", concent: "南极臭袜子流传千古2", price: 888.00, count: 1, checked: false },
            { id: 3, title: "南极臭袜子3", concent: "南极臭袜子流传千古3", price: 888.00, count: 1, checked: false },
        ],
    },
    mutations: {
        inCounts(state, { count, index }) {
            state.goods[index].count = count;
        },
        watchCheckeds(state, { index, checked }) {
            state.goods[index].checked = checked
        },
        isCheckedAlls(state,{checkedAll}) {
            state.goods.forEach(item=>{
                item.checked = !checkedAll;
            })
        }
    },
    getters: {
        watchPrice(state) {
            let num = 0;
            state.goods.forEach((item, index) => {
                if (item.count >= 1 && item.checked) {
                    console.log(item);
                    num += item.price * (item.count * 100)
                }
            })
            return num
        },
        isCheckeds(state) {
            let selectedObj={};
            state.goods.forEach(item=>{
                selectedObj[item.id] = item.checked
            })
            return selectedObj
        },
        isCheckedAll(state) {
            let checkedsAll = false;
            checkedsAll = state.goods.every(item=>{
                return item.checked === true
            })
            return checkedsAll;
        }
    },
    plugins: [createPersistedState()]
})