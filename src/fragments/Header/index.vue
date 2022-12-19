<script lang="ts" setup>
import Nav from './fragments/Nav/index.vue';
import Banner from './fragments/Banner/index.vue';
</script>

<template>
  <div class="b-header">
    <Nav class="b-header__nav" />
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
  &__banner {
    position: relative;
    z-index: 0;
  }
}
</style>
