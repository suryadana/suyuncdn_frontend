import { GetterTree } from 'vuex';

export type Getters = {
  countriesName(state: any): any[];
}

export const getters: GetterTree<any, any> & Getters = {
  countriesName: (state) => {
    const result: any[] = [];
    state.countries.forEach((item: any) => {
      result.push(item.name);
    });
    return result;
  },
}
