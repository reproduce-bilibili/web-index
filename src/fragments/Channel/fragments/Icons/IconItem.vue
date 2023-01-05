<script lang="ts" setup>
import Dot from '@/components/Dot.vue';
import Graph from '@/components/Graph/index.vue';
import SvgIcon from '@/components/SvgIcon.vue';
defineProps({
  iconName: String,
  text: String,
  hasNew: Boolean,
});
</script>

<template>
  <Graph class="icon-item">
    <div class="icon-item__icon-container">
      <slot name="icon">
        <SvgIcon class="icon-item__icon-content" :name="iconName" />
      </slot>
      <Dot class="icon-item__dot" v-if="hasNew" />
    </div>
    <div class="icon-item__text">
      <slot name="text">
        {{ text }}
      </slot>
    </div>
  </Graph>
</template>

<style lang="scss" scoped>
@use '@/style/mixins.scss' as *;
@use '@/style/break-point' as * with($key: channel);
.icon-item {
  display: flex;
  flex-direction: column;
  &__icon-container {
    @include flex-center();
    width: 40px;
    height: 40px;
    margin-bottom: 6px;
    position: relative;
  }
  &__icon-content {
    width: 25px;
    height: 25px;
    color: #ffffff;
  }
  &__dot {
    position: absolute;
    top: 0;
    right: 0;
  }
  &__text {
    color: var(--text1);
    font-size: var(--fs1);
    line-height: 18px;
    text-align: center;
  }
  @include mq($from: lg) {
    &__icon-container {
      width: 46px;
      height: 46px;
    }
    &__text {
      font-size: var(--fs2);
      line-height: 20px;
    }
  }
}
</style>
