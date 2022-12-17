<script lang="ts" setup>
import { makeImgProps } from '@/composables/img';

defineProps({
  ...makeImgProps(),
});
</script>

<template>
  <div class="img--with-cover">
    <div class="img-content" v-img="src"></div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.img--with-cover {
  position: relative;
  .img-content {
    overflow: hidden;
    border-radius: 4px;
  }
}
</style>
