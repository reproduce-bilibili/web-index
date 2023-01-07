<script lang="ts" setup>
import IconItem from './IconItem.vue';
</script>

<template>
  <div class="channel-icon-items--fixed">
    <IconItem
      icon-name="header-channel-trend"
      text="动态"
      href="https://t.bilibili.com" />
    <IconItem
      icon-name="header-channel-hot"
      text="热门"
      href="https://www.bilibili.com/v/popular/all" />
    <IconItem
      icon-name="header-channel-channel"
      text="频道"
      href="https://www.bilibili.com/v/channel" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/style/break-point' as * with($key: channel);
.channel-icon-items--fixed {
  display: flex;
  width: 210px;
  flex-wrap: wrap;
  & > * {
    flex-shrink: 0;
    flex-grow: 1;
    margin-bottom: 14px;
    letter-spacing: 2px;
  }
  @include mq($from: lg) {
    width: 240px;
  }
  @include mq($until: md) {
    width: 192px;
  }
  @include mq($until: 1440px) {
    width: 70px;
  }
}
</style>
