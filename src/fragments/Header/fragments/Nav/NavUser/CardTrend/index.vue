<script lang="ts" setup>
import { useTabs } from '@/composables/tabs';
import Tabs from '../../components/Tabs/index.vue';
import TabItem from '../../components/Tabs/TabItem.vue';
import ContentVideo from './ContentVideo.vue';
import ContentLive from './ContentLive.vue';
import ContentRead from './ContentRead.vue';

const { tabs, setActiveTab, activeTab } = useTabs({
  tabs: [
    {
      id: '1',
      title: '视频',
      activeTitle: '视频动态',
    },
    {
      id: '2',
      title: '直播',
      activeTitle: '直播动态',
    },
    {
      id: '3',
      title: '专栏',
      activeTitle: '专栏动态',
    },
  ],
  defaultActive: '1',
});
</script>

<template>
  <div class="card-trend">
    <Tabs class="tabs">
      <TabItem
        v-for="tabItem in tabs"
        v-bind="tabItem"
        :is-active="tabItem === activeTab"
        @click="setActiveTab(tabItem)"></TabItem>
    </Tabs>
    <ContentVideo v-if="activeTab?.id === '1'" />
    <ContentLive v-else-if="activeTab?.id === '2'" />
    <ContentRead v-else-if="activeTab?.id === '3'" />
  </div>
</template>

<style lang="scss" scoped>
.card-trend {
  width: 370px;
  height: 540px;
  .tabs {
    border-bottom: 1px solid var(--line_regular);
  }
}
</style>
