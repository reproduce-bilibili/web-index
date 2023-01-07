<script lang="ts" setup>
import Arrow from '@/components/Icon/Arrow.vue';
import { useChannelBreakpoints } from '@/composables/breakpoint';
import { computed, ref } from 'vue';
import ChannelItem from './ChannelItem.vue';

import { Item, useChannelData } from '../../composables/channelItem';

const bk = useChannelBreakpoints();
const itemMaxCount = computed(() => {
  if (bk.smallerOrEqual('md').value) return 9 * 2;
  else if (bk.between('md', 'lg').value) return 11 * 2;
  else if (bk.between('lg', 'xl').value) return 12 * 2;
  else return 14 * 2;
});

const _itemList: Item[] = useChannelData();

const itemList = computed(() => {
  if (_itemList.length > itemMaxCount.value)
    return _itemList.slice(0, itemMaxCount.value - 1);
  else return _itemList;
});
const itemListMore = computed(() => {
  if (_itemList.length > itemMaxCount.value)
    return _itemList.slice(itemMaxCount.value - 1);
  else return [];
});
const hasMore = computed(() => !!itemListMore.value.length);
const moreMenuOpened = ref(false);
</script>

<template>
  <div class="channel-left-items">
    <ChannelItem
      v-for="(item, i) in itemList"
      v-bind="item"
      :direction="i % 2 === 0 ? 'top' : 'bottom'" />
    <ChannelItem
      :class="['item-more', { 'item-more--open': moreMenuOpened }]"
      v-show="hasMore"
      :sub-items="itemListMore"
      direction="bottom"
      @open-menu="moreMenuOpened = true"
      @close-menu="moreMenuOpened = false">
      <span class="text">更多</span><Arrow class="arrow" />
    </ChannelItem>
  </div>
</template>

<style lang="scss" scoped>
@use '@/style/break-point' as * with($key: channel);
.channel-left-items {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  @include mq($until: md) {
    grid-template-columns: repeat(9, 1fr);
  }
  @include mq($from: md, $until: lg) {
    grid-template-columns: repeat(11, 1fr);
  }
  @include mq($from: lg, $until: xl) {
    grid-template-columns: repeat(12, 1fr);
  }
  @include mq($from: xl) {
    grid-template-columns: repeat(14, 1fr);
  }

  .item-more {
    .text {
      letter-spacing: 0;
      margin-right: 5px;
    }
    .arrow {
      transition: transform 0.3s;
    }
  }
  .item-more--open {
    .arrow {
      transform: rotate(180deg);
    }
  }
}
</style>
