<script lang="ts" setup>
import { makeImgProps } from '@/composables/img';

defineProps({
  ...makeImgProps(),
});
</script>

<template>
  <div class="history-img">
    <div class="img-content" v-img="src"></div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.history-img {
  position: relative;
  .img-content {
    overflow: hidden;
    border-radius: 4px;
  }
}
</style>
