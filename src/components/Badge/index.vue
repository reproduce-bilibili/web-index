<script lang="ts" setup>
defineProps({
  content: [String, Number],
});
</script>

<template>
  <sup class="b-badge">
    <slot>{{ content }}</slot>
  </sup>
</template>

<style lang="scss">
.b-badge {
  z-index: 1;
  line-height: 16px;
  padding: 0 5px;
  min-width: 15px;
  font-size: var(--fs0);
  color: #fff;
  display: inline-block;
  border-radius: var(--radius3);
  text-align: center;
  background-color: #fa5a57;
}
</style>
