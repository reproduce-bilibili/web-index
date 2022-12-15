<script lang="ts" setup></script>

<template>
  <div class="cover-tag"><slot /></div>
</template>

<style lang="scss" scoped>
.cover-tag {
  display: inline-block;
  color: #fff;
  background-color: rgba($color: #000000, $alpha: 0.4);
  line-height: 16px;
  border-radius: 2px;
  font-size: var(--fs0);
}
</style>
