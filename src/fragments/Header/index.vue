<script lang="ts" setup>
import Nav from './fragments/Nav/index.vue';
import Banner from './fragments/Banner/index.vue';
import { watchEffect, ref, computed } from 'vue';
import { NavState, provideNavState } from './composables/nav';
import { useWindowScroll } from '@/composables/scroll';

const { meta: scrollData } = useWindowScroll();

const navState = ref<NavState>({ fixed: false });
provideNavState(computed(() => navState.value));

watchEffect(() => {
  if (!scrollData.value) return;
  navState.value.fixed = scrollData.value.top > 64;
});
</script>

<template>
  <div class="b-header">
    <Nav
      :class="['b-header__nav', { 'b-header__nav--fixed': navState.fixed }]" />
    <Banner class="b-header__banner" />
  </div>
</template>

<style lang="scss">
.b-header {
  position: relative;

  &__nav {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1000;
  }

  &__nav--fixed {
    position: fixed;
    top: 0;
  }

  &__banner {
    position: relative;
    z-index: 0;
  }
}
</style>
