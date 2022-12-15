<script lang="ts" setup>
import { useTabs } from '@/composables/tabs';
import Tabs from '../../components/Tabs/index.vue';
import TabItem from '../../components/Tabs/TabItem.vue';
import Live from './Live.vue';
import Video from './Video/index.vue';
import Read from './Read.vue';
import ScrollContainer from '../../components/ScrollContainer.vue';

const { tabs, setActiveTab, activeTab } = useTabs({
  tabs: [
    { id: '1', title: '视频' },
    { id: '2', title: '直播' },
    { id: '3', title: '专栏' },
  ],
  defaultActive: '1',
});
</script>

<template>
  <div class="card-history">
    <Tabs class="tabs">
      <TabItem
        v-for="tab in tabs"
        :key="tab.id"
        v-bind="tab"
        :is-active="activeTab === tab"
        @click="setActiveTab(tab)" />
    </Tabs>
    <ScrollContainer class="content">
      <Video v-if="activeTab?.id === '1'" />
      <Live v-else-if="activeTab?.id === '2'" />
      <Read v-else-if="activeTab?.id === '3'" />
    </ScrollContainer>
  </div>
</template>

<style lang="scss" scoped>
.card-history {
  width: 370px;
  height: 540px;
  display: flex;
  flex-direction: column;
  .tabs {
    border-bottom: 1px solid var(--line_regular);
  }
  .content {
    flex-grow: 1;
  }
}
</style>
