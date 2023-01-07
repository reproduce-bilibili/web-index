<script lang="ts" setup>
import { useAsideChannelData } from '../../composables/channelItem';
import ChannelItem from './ChannelItem.vue';
const itemList = useAsideChannelData();
</script>

<template>
  <div class="channel-right-items">
    <ChannelItem
      v-for="(item, i) in itemList"
      v-bind="item"
      :direction="i % 2 === 0 ? 'top' : 'bottom'" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/style/break-point' as * with($key: channel);
.channel-right-items {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 10px;

  @include mq($from: lg) {
    width: 258px;
  }
  @include mq($from: md, $until: lg) {
    width: 240px;
  }
  @include mq($from: sm, $until: md) {
    width: 230px;
  }
  @include mq($until: sm) {
    width: 168px;
  }
}
</style>
