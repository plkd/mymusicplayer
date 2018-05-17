/*
 * @Author: lijiliang
 * @Date: 2018-05-17 14:18:11
 * @Last Modified by: lijiliang
 * @Last Modified time: 2018-05-17 14:26:59
 */
import Vue from 'vue'
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex)

const state = {
  userInfo: {}
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
