<script lang="ts" setup>
import IconItem from './IconItem.vue';
import SvgIcon from '@/components/SvgIcon.vue';
</script>

<template>
  <div class="channel-icon-items">
    <IconItem class="item" href="https://t.bilibili.com" text="动态" has-new>
      <template #icon>
        <div class="icon-container trend">
          <SvgIcon class="icon" name="header-channel-trend" />
        </div>
      </template>
      <template #text> 动态 </template>
    </IconItem>
    <IconItem
      class="item"
      href="https://www.bilibili.com/v/popular/all"
      text="热门"
      has-new>
      <template #icon>
        <div class="icon-container hot">
          <SvgIcon class="icon" name="header-channel-hot" />
        </div>
      </template>
    </IconItem>
    <IconItem
      class="item"
      href="https://www.bilibili.com/v/channel"
      text="频道">
      <template #icon>
        <div class="icon-container channel">
          <SvgIcon class="icon" name="header-channel-channel" />
        </div>
      </template>
    </IconItem>
  </div>
</template>

<style lang="scss" scoped>
@use '@/style/mixins.scss' as *;

.channel-icon-items {
  display: flex;
  .item {
    flex-grow: 1;
    flex-shrink: 0;
    margin-right: 24px;
  }
  .item:nth-last-child(1) {
    margin-right: 0;
  }
  .icon-container {
    @include flex-center();
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    transition: background-color 0.3s;
    .icon {
      width: 25px;
      height: 25px;
      color: #ffffff;
    }
    &.trend {
      background-color: #ff9212;
    }
    &.trend:hover {
      background-color: #ff9e2c;
    }
    &.hot {
      background-color: #f07775;
    }
    &.hot:hover {
      background-color: #f38e8c;
    }
    &.channel {
      background-color: #59ca73;
    }
    &.channel:hover {
      background-color: #6cd083;
    }
  }
}
</style>
