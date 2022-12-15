<script lang="ts" setup>
import Badge from './index.vue';
</script>

<template>
  <div class="b-badge-wrapper">
    <Badge class="badge" v-bind="$attrs" />
    <slot />
  </div>
</template>

<style lang="scss">
.b-badge-wrapper {
  position: relative;
  .badge {
    z-index: 1;
    position: absolute;
  }
}
</style>
