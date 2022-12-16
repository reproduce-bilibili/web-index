<script lang="ts" setup>
import Graph from '@/components/Graph/index.vue';
</script>

<template>
  <Graph class="button-view-all"><slot /></Graph>
</template>

<style lang="scss" scoped>
.button-view-all {
  display: block;
  height: 36px;
  line-height: 36px;
  text-align: center;
  color: var(--text2);
  font-size: var(--fs2);
  background-color: var(--bg2);
  border-radius: var(--radius2);
  transition: color 0.3s;
  &:hover {
    color: var(--text1);
  }
}
</style>
