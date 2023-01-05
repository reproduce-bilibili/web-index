<script setup>
defineProps({
  color: {
    type: String,
    default: '#fa5a57',
  },
  border: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: '10px',
  },
});
</script>

<template>
  <sup :class="['b-dot', { 'b-dot--border': border }]"></sup>
</template>

<style lang="scss">
.b-dot {
  border-radius: 50%;
  overflow: hidden;
  background-color: v-bind(color);
  height: v-bind(size);
  width: v-bind(size);
}
.b-dot--border {
  border: 2px solid #ffffff;
}
</style>
