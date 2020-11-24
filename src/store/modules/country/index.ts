import { Module } from 'vuex';

import { actions } from './actions';
import { getters } from './getters';

const namespaced: boolean = true;

export const country: Module<any, any> = {
  namespaced,
  state: {
    countries: []
  },
  actions,
  getters,
};
