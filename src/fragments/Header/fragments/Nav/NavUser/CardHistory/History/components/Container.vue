<script lang="ts" setup>
import Graph from '@/components/Graph/index.vue';
</script>

<template>
  <Graph class="list-item">
    <slot />
  </Graph>
</template>

<style lang="scss" scoped>
.list-item {
  padding: 10px 20px;
  transition: background-color 0.3s;
  &:hover {
    background-color: var(--graph_bg_thick);
  }
}
</style>
