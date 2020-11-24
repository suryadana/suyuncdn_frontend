import { ActionTree } from 'vuex';
import CountryService from '@/service/country.service';

export interface ActionCallback {
  params: any;
  success: (response: any) => void;
  fail: (response: any) => void;
}

const serviceCountry: CountryService = new CountryService();

export const actions: ActionTree<any, any> = {
  actionSelectCountries({state}, callback: ActionCallback) {
    serviceCountry.selectCountries().then((response: any) => {
      state.countries = response.data;
      callback.success(response);
    }).catch(error => callback.fail(error));
  },
  actionUpdateCountriesBanned({state}, callback: ActionCallback) {
    serviceCountry.updateCountry(callback.params).then((response: any) => {
      callback.success(response);
    }).catch(error => callback.fail(error));
  },
};
