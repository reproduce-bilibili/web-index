<script lang="ts" setup>
import Graph from '@/components/Graph/index.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { makeIconItemProps } from '../../composables/iconItem';
defineProps({
  ...makeIconItemProps(),
});
</script>

<template>
  <Graph class="icon-item--fixed">
    <div class="icon-item--fixed__icon-container">
      <slot name="icon">
        <SvgIcon class="icon-item--fixed__icon-content" :name="iconName" />
      </slot>
    </div>
    <div class="icon-item--fixed__text">
      <slot name="text">
        {{ text }}
      </slot>
    </div>
  </Graph>
</template>

<style lang="scss" scoped>
@use '@/style/mixins.scss' as *;
.icon-item--fixed {
  display: flex;
  align-items: center;
  color: var(--text2);
  font-size: var(--fs2);
  transition: color 0.3s;
  height: 28px;
  line-height: 28px;
  &__icon-container {
    @include flex-center();
    margin-right: 5px;
    width: 22px;
    height: 22px;
  }
  &__icon-content {
    width: 22px;
    height: 22px;
    color: var(--text2);
    transition: color 0.3s;
  }
}
.icon-item--fixed:hover {
  color: var(--brand_blue);
  .icon-item--fixed__icon-content {
    color: var(--brand_blue);
  }
}
</style>
