<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  count: Number,
  offset: {
    type: Object,
    default: {
      right: '-0.1em',
      top: '-0.2em',
    },
  },
  max: {
    type: Number,
    default: 99,
  },
});

const _count = computed(() =>
  props.count
    ? props.count > props.max
      ? `${props.max}+`
      : props.count
    : undefined,
);
</script>

<template>
  <sup class="b-badge" :style="offset"> {{ _count }} </sup>
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
