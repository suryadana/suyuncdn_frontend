<template>
  <div id="app" v-bind:is="$route.meta.layout"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DefaultLayout from './layouts/DefaultLayout.vue';

@Component({
  components: {
    'default-layout': DefaultLayout,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
