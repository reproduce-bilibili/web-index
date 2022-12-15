<script lang="ts" setup>
import LinkItem from './LinkItem.vue';
import IconLive from '@/components/Icon/VideoCamera.vue';
import IconLesson from '@/components/Icon/Notebook.vue';
import IconWallet from '@/components/Icon/Wallet.vue';
import IconList from '@/components/Icon/ItemList.vue';
</script>

<template>
  <div class="link-list--recommend">
    <LinkItem href="https://link.bilibili.com/p/center/index">
      <span>直播中心</span>
      <template #icon><IconLive /></template>
    </LinkItem>
    <LinkItem
      href="https://www.bilibili.com/cheese/mine/list?csource=common_hp_myclass_null">
      <span>我的课程</span>
      <template #icon><IconLesson /></template>
    </LinkItem>
    <LinkItem href="https://pay.bilibili.com/pay-v2-web/bcoin_index">
      <span>B币钱包</span>
      <template #icon><IconWallet /></template>
    </LinkItem>
    <LinkItem href="https://show.bilibili.com/orderlist">
      <span>订单中心</span>
      <template #icon><IconList /></template>
    </LinkItem>
  </div>
</template>

<style lang="scss">
.link-list--recommend {
  > * {
    margin-bottom: 2px;
  }
}
</style>
