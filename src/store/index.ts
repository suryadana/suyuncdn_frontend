import Vue from 'vue';
import Vuex from 'vuex';

import { country } from './modules/country/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    country,
  },
  state: {
    sidebarShow: 'responsive',
    sidebarMinimize: false,
  },
  mutations: {
    toggleSidebarDesktop(state) {
      const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow);
      state.sidebarShow = sidebarOpened ? false : 'responsive';
    },
    toggleSidebarMobile(state) {
      const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow);
      state.sidebarShow = sidebarClosed ? true : 'responsive';
    },
    set(state, [variable, value]) {
      (state as any)[variable] = value;
    },
  },
  actions: {
  },
});
