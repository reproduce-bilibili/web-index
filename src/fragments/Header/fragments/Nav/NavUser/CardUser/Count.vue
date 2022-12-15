<script lang="ts" setup>
import Graph from '@/components/Graph/index.vue';
import { useLink } from '@/composables/link';
import { useAttrs } from 'vue';
const props = defineProps({
  count: {
    type: Number,
    default: 0,
  },
  label: {
    type: String,
    default: '',
  },
});

const { isLink } = useLink(props, useAttrs());
</script>

<template>
  <Graph :class="['count-item', { 'count-item--link': isLink }]">
    <div class="count-item__count">{{ count }}</div>
    <div class="count-item__label">{{ label }}</div>
  </Graph>
</template>

<style lang="scss" scoped>
@use '@/style/mixins.scss' as *;
.count-item.count-item--link:hover {
  .count-item__count,
  .count-item__label {
    color: var(--brand_blue);
  }
}
.count-item {
  @include flex-center();
  flex-direction: column;
  text-align: center;
  line-height: 1.25;

  &__count {
    font-size: var(--fs4);
    color: var(--text1);
    transition: color .2s;
  }
  &__label {
    font-size: var(--fs0);
    color: var(--text3);
    transition: color .2s;
  }
}
</style>
