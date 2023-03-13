<script lang="ts" setup>
import Banner from './fragments/Banner/index.vue';
import Cards from './fragments/Cards/index.vue';
</script>

<template>
  <div class="b-recommend">
    <Banner class="b-recommend__banner" />
    <Cards />
  </div>
</template>

<style lang="scss">
@use '@/style/break-point' as * with($key: recommend);
.b-recommend {
  display: grid;
  padding: 0 var(--layout_padding);
  grid-gap: 20px;
  @include mq($until: md) {
    grid-template-columns: repeat(4, 1fr);
  }
  @include mq($from: md) {
    grid-template-columns: repeat(5, 1fr);
  }

  &__banner {
    grid-column: 1/3;
    grid-row: 1/3;
  }
}
</style>
