<script lang="ts" setup>
import Logo from './Logo.vue';
import Graph from '@/components/Graph/index.vue';
</script>

<template>
  <Graph class="entry-logo" href="https://www.bilibili.com">
    <Logo />
  </Graph>
</template>

<style lang="scss" scoped>
.entry-logo {
  display: flex;
  width: 60px;
}
</style>
