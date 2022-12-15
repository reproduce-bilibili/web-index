<script lang="ts" setup>
import Graph from '@/components/Graph/index.vue';
import { makeLinkProps } from '@/composables/link';
defineProps({
  ...makeLinkProps(),
});
</script>

<template>
  <Graph class="button-nav-panel" tag="a" v-bind="$props">
    <slot />
  </Graph>
</template>

<style lang="scss" scoped>
.button-nav-panel {
  display: inline-block;
  color: inherit;
  cursor: pointer;
  transform: 0.3s;
  &:hover {
    color: var(--link_blue);
  }
}
</style>
