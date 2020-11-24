<template>
  <CSidebar
    fixed
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <CIcon
        class="c-sidebar-brand-full"
        name="logo"
        size="custom-size"
        :height="35"
        viewBox="0 0 556 134"
      />
      <CIcon
        class="c-sidebar-brand-minimized"
        name="logo"
        size="custom-size"
        :height="35"
        viewBox="0 0 110 134"
      />
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="nav"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {
  private nav: any[] = [
    {
      _name: 'CSidebarNav',
      _children: [
        {
          _name: 'CSidebarNavItem',
          name: 'CountryBanned',
          to: '/',
          icon: 'cil-ban',
        },
      ],
    },
  ];

  private get show() {
    return this.$store.state.sidebarShow;
  }

  private get minimize() {
    return this.$store.state.sidebarMinimize;
  }
}
</script>
