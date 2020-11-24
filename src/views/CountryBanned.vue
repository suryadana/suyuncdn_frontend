<template>
  <CCardBody color="white">
    <div class="container">
      <h2>Banned Countries</h2>

      <CRow>
        <CCol sm="12">
          <label>Banned</label>
          <multiselect :value="countriesBanned" :options="countries" label="name" :multiple="true"
                       @remove="removeCountry">
          </multiselect>
        </CCol>
      </CRow>

      <CRow>
        <CCol sm="12">
          <label>Select Banned Countries</label>
          <CInputCheckbox label="Select all"
                          :checked.sync="checkedSelectAll"
                          @update:checked="checkboxSelectAll"/>
          <CTabs variant="tabs" :active-tab="0"
                 @update:activeTab="changeActiveTab">
            <CTab v-for="(filter, index) in filters"
                  :title="filter">
              <template v-for="(item, index) in filterCountryFirstLetter(filter)">
                <label>{{ Object.keys(item)[0] }}</label>
                <CRow>
                  <CCol sm="2"
                        v-for="(country, index) in item[Object.keys(item)[0]]"
                        :key="Object.keys(item)[0] + '-' + index">
                    <CInputCheckbox :label="country.name"
                                    :checked.sync="country.is_banned"
                                    @update:checked="checkedCountry($event, country)"/>
                  </CCol>
                </CRow>
              </template>
            </CTab>
          </CTabs>
        </CCol>
      </CRow>

      <div class="container-button">
        <CButton
          color="primary"
          size="lg"
          class="m-2"
          @click="clickSave()">
          Save
        </CButton>
      </div>
    </div>
  </CCardBody>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Multiselect from 'vue-multiselect'
import { Action, State, Getter } from 'vuex-class';

@Component({
  components: {
    Multiselect,
  },
})
export default class CountryBanned extends Vue {

  /* VUEX */

  // ACTION

  @Action('actionSelectCountries', { namespace: 'country' })
  private actionSelectCountries: any;
  @Action('actionUpdateCountriesBanned', { namespace: 'country' })
  private actionUpdateCountriesBanned: any;

  // STATE

  @State('countries', { namespace: 'country'})
  private countries: any;

  // GETTER

  private countriesBanned: any[] = [];
  private countriesSection: any[] = [];
  private filters: string[] = [
    'ABC',
    'DEF',
    'GHI',
    'JKL',
    'MN',
    'OPQ',
    'RST',
    'UVW',
    'XYZ'
  ];
  private checkedSelectAll: boolean = false;
  private activeTab: number = 0;

  private created() {
    this.actionSelectCountries({
      params: null,
      success: (response: any) => {
        // TODO
        this.$nextTick(() => {
          this.countries.forEach((item: any) => {
            if (item.is_banned) {
              this.countriesBanned.push(item);
            }
          });
          this.changeActiveTab(0);
        });
      },
      fail: (response: any) => {
        // TODO
      },
    });
  }

  private clickSave() {
    const countriesBanned: any[] = [];
    this.countriesBanned.forEach((item: any) => {
      countriesBanned.push(item.id);
    });
    this.actionUpdateCountriesBanned({
      params: {
        countries: countriesBanned
      },
      success: (response: any) => {
        // TODO
        this.actionSelectCountries({
          params: null,
          success: (responseSelect: any) => {
            // TODO
            this.$nextTick(() => {
              this.countriesBanned = [];
              this.countries.forEach((item: any) => {
                if (item.is_banned) {
                  this.countriesBanned.push(item);
                }
              });
              this.changeActiveTab(0);
            });
          },
          fail: (responseSelect: any) => {
            // TODO
          },
        });
      },
      fail: (response: any) => {
        // TODO
      }
    })
  }

  private filterCountryFirstLetter(search: string): any[] {
    const result: any[] = [];
    const searchSplit = search.split('');
    searchSplit.forEach((itemSearch: string) => {
      const resultSearch: any[] = [];
      this.countries.forEach((item: any) => {
        if (item.name[0].toUpperCase() === itemSearch) {
          resultSearch.push(item);
        }
      });
      const obj: any = {};
      obj[itemSearch] = resultSearch;
      result.push(obj);
    });
    return result;
  }

  private checkedCountry(value: boolean, item: any) {
    if (value) {
      this.countriesBanned.push(item);
    } else {
      this.countriesBanned.splice(this.countriesBanned.findIndex((item: any) => { return item.id === item.id}), 1);
    }
  }

  private removeCountry(country: any, id: any) {
    this.countriesBanned.splice(this.countriesBanned.findIndex((item: any) => { return item.id === country.id}), 1);
    country.is_banned = false;
  }

  private changeActiveTab(index: number) {
    this.activeTab = index;
    this.checkedSelectAll = false;
    const search = this.filters[this.activeTab];
    const searchSplit = search.split('');
    this.countriesSection = [];
    searchSplit.forEach((itemSearch: string) => {
      this.countries.forEach((item: any) => {
        if (item.name[0].toUpperCase() === itemSearch) {
          this.countriesSection.push(item);
        }
      });
    });
  }

  private checkboxSelectAll(value: boolean) {
    if (value) {
      this.countriesSection.forEach((item: any) => {
        item.is_banned = true;
        let itemAdd = null;
        this.countriesBanned.forEach((itemBanned: any) => {
          if (item.id !== itemBanned.id) {
            itemAdd = item;
          }
        });
        if (itemAdd) {
          this.countriesBanned.push(itemAdd);
        }
      });
    } else {
      this.countriesSection.forEach((item: any) => {
        item.is_banned = false;
        this.countriesBanned = this.countriesBanned.filter((itemFilter: any) => {
          return itemFilter.id !== item.id;
        });
      });
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
.row {
  margin-left: 0px;
  margin-right: 0px;
}
.container-button {
  text-align: right;
}
</style>
