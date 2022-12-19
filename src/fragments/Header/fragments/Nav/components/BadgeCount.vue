<script lang="ts" setup>
import Badge from '@/components/Badge/index.vue';
import { computed } from 'vue';

const props = defineProps({
  count: Number,
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
  <Badge
    ><slot>{{ _count }}</slot></Badge
  >
</template>
