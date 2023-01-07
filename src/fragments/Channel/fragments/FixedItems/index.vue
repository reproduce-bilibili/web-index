<script lang="ts" setup>
import ChannelItem from './ChannelItem.vue';
import {
  useAsideChannelData,
  useChannelData,
} from '../../composables/channelItem';
import { useChannelBreakpoints } from '@/composables/breakpoint';
import { computed } from 'vue';

const _itemList = useChannelData();

const bk = useChannelBreakpoints();
const itemMaxCount = computed(() => {
  if (bk.greater('xl').value) return 14;
  else if (bk.between('lg', 'xl').value) return 12;
  else if (bk.between('md', 'lg').value) return 11;
  else return 9;
});

const itemListLeft = computed(() => _itemList.slice(0, itemMaxCount.value * 2));
const itemListBottom = computed(() => _itemList.slice(itemMaxCount.value * 2));
const itemListRight = useAsideChannelData();
</script>

<template>
  <div class="channel-items--fixed">
    <div class="channel-items--fixed__left">
      <div class="channel-items--fixed__left__top">
        <ChannelItem v-for="item in itemListLeft" v-bind="item" />
      </div>
    </div>
    <div class="channel-items--fixed__right">
      <ChannelItem v-for="item in itemListRight" v-bind="item" />
    </div>
    <div class="channel-items--fixed__left__bottom">
      <ChannelItem
        v-show="itemListBottom.length"
        v-for="item in itemListBottom"
        v-bind="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/style/break-point' as * with($key: channel);
.channel-items--fixed {
  display: grid;
  gap: 14px 10px;
  @include mq($from: xl) {
    grid-template-columns: repeat(17, 1fr);
  }
  @include mq($from: lg, $until: xl) {
    grid-template-columns: repeat(15, 1fr);
  }
  @include mq($from: md, $until: lg) {
    grid-template-columns: repeat(14, 1fr);
  }
  @include mq($until: md) {
    grid-template-columns: repeat(12, 1fr);
  }

  &__left {
    display: inline-grid;
    &__top {
      display: inline-grid;
      gap: 14px 10px;
      grid-template-rows: repeat(2, 1fr);
      grid-auto-flow: column;
    }
  }
  &__left__bottom {
    display: inline-grid;
    gap: 14px 10px;
    grid-template-rows: 1fr;
  }
  &__left__bottom {
    @include mq($from: lg) {
      grid-column: span 15;
      grid-template-columns: repeat(15, 1fr);
    }
    @include mq($from: md, $until: lg) {
      grid-column: span 14;
      grid-template-columns: repeat(14, 1fr);
    }
    @include mq($until: md) {
      grid-column: span 12;
      grid-template-columns: repeat(12, 1fr);
    }
  }
  &__left,
  &__left__top {
    @include mq($from: xl) {
      grid-column: span 14;
      grid-template-columns: repeat(14, 1fr);
    }
    @include mq($from: lg, $until: xl) {
      grid-column: span 12;
      grid-template-columns: repeat(12, 1fr);
    }
    @include mq($from: md, $until: lg) {
      grid-column: span 11;
      grid-template-columns: repeat(11, 1fr);
    }
    @include mq($until: md) {
      grid-column: span 9;
      grid-template-columns: repeat(9, 1fr);
    }
  }
  &__right {
    grid-column: span 3;
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: column;
    gap: 14px 10px;
  }
}
</style>
