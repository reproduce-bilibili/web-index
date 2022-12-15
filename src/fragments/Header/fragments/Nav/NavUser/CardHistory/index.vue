<script lang="ts" setup>
import { useTabs } from '@/composables/tabs';
import Tabs from '../../components/Tabs/index.vue';
import TabItem from '../../components/Tabs/TabItem.vue';
import Content from './Content.vue';
import ScrollContainer from '../../components/ScrollContainer.vue';

const { tabs, setActiveTab, activeTab } = useTabs({
  tabs: [
    { id: '1', title: '视频' },
    { id: '2', title: '直播' },
    { id: '3', title: '专栏' },
  ],
  defaultActive: '1',
});
const contentTypeMap: Record<string, any> = {
  1: 'video',
  2: 'live',
  3: 'read',
};
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
      <Content :type="contentTypeMap[activeTab?.id ? activeTab.id : 1]" />
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
