import { AxiosResponse } from 'axios';
import { Base } from './base/base.service';

export default class CountryService {
  public selectCountries(): Promise<AxiosResponse<any>> {
    return Base().get('country/');
  }

  public updateCountry(params: any): Promise<AxiosResponse<any>> {
    return Base().patch(`country/update/`, params);
  }
}
