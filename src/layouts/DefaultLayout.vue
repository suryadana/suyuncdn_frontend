<template>
  <div class="c-app">
    <Sidebar/>
    <CWrapper>
      <Header/>
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade" mode="out-in">
              <router-view :key="$route.path"></router-view>
            </transition>
          </CContainer>
        </main>
      </div>
      <Footer/>
    </CWrapper>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sidebar from '@/components/layouts/Sidebar.vue';
import Header from '@/components/layouts/Header.vue';
import Footer from '@/components/layouts/Footer.vue';

@Component({
  components: {
    Header,
    Footer,
    Sidebar,
  },
})
export default class DefaultLayout extends Vue {}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
