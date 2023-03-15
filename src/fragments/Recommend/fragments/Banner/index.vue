<script lang="ts" setup>
import Shim from './Shim.vue';
import Content from './Content.vue';
</script>

<template>
  <div class="b-banner">
    <div class="b-banner__wrapper">
      <Shim />
      <Content />
    </div>
  </div>
</template>

<style lang="scss">
.b-banner {
  &__wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 6px;
  }
}
</style>
