<script lang="ts" setup>
import { useTabs, UseTabsTabItem } from '@/composables/tabs';
import Graph from '@/components/Graph/index.vue';
import IconArrow from '@/components/Icon/Arrow.vue';
import { computed, watch } from 'vue';
import { makeUserInfoPropsSimple } from '@/composables/userInfo';
import ScrollContainer from '../../components/ScrollContainer.vue';

const props = defineProps({
  ...makeUserInfoPropsSimple(),
});

type TabEx = {
  count: number;
};

const { tabs, setActiveTab, activeTab } = useTabs<TabEx>({
  tabs: [
    {
      id: 72475430,
      title: '默认收藏夹',
      count: 0,
    },
    {
      id: 0,
      title: '稍后再看',
      count: 1,
    },
    {
      id: 1873338430,
      title: 'yume',
      count: 1,
    },
    {
      id: 316424930,
      title: '刚大木',
      count: 1,
    },
    {
      id: 946357030,
      title: 'lol',
      count: 1,
    },
    {
      id: 736691030,
      title: 'OOR',
      count: 1,
    },
    {
      id: 728566130,
      title: '胶',
      count: 1,
    },
    {
      id: 98495030,
      title: '番剧',
      count: 1,
    },
    {
      id: 126361830,
      title: 'CSGO',
      count: 1,
    },
    {
      id: 106044430,
      title: '电影',
      count: 1,
    },
    {
      id: 102464130,
      title: '第九艺术',
      count: 1,
    },
    {
      id: 102437130,
      title: 'LIVE',
      count: 1,
    },
  ],
  defaultActive: '0',
});

const emit = defineEmits<{
  (e: 'change', tab: UseTabsTabItem<TabEx>): void;
}>();

watch(activeTab, (v) => emit('change', v as UseTabsTabItem<TabEx>), {
  immediate: true,
});

const allCollectionUrl = computed(
  () => `https://space.bilibili.com/${props.userInfo?.uid}/favlist`,
);
</script>

<template>
  <ScrollContainer class="tabs-collection">
    <Graph
      v-for="tab in tabs"
      :key="tab.id"
      :class="[
        'tabs-collection__tab',
        { 'tabs-collection__tab--active': activeTab === tab },
      ]"
      @click="setActiveTab(tab)">
      <span class="title" :title="tab.title">{{ tab.title }}</span>
      <span class="count">{{ tab.count }}</span>
    </Graph>
    <Graph
      class="tabs-collection__tab tabs-collection__tab--all"
      :href="allCollectionUrl"
      ><span>全部收藏夹<IconArrow class="icon" /></span
    ></Graph>
  </ScrollContainer>
</template>

<style lang="scss" scoped>
@use '@/style/mixins.scss' as *;
.tabs-collection {
  &__tab {
    height: 46px;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    cursor: pointer;
    transition: background-color 0.3s;
    .title {
      @include line-clamp(1);
      flex-basis: 0;
      flex-grow: 1;
      flex-shrink: 0;
      font-size: var(--fs2);
      color: var(--text1);
    }
    .count {
      font-size: var(--fs0);
      color: var(--text3);
    }
  }
  &__tab--active {
    background-color: var(--brand_blue);
    .title,
    .count {
      color: #fff;
    }
  }

  &__tab--all {
    color: var(--brand_blue);
    font-size: var(--fs2);
    .icon {
      transform: rotate(-90deg);
    }
  }
  &__tab--all:hover {
    background-color: var(--bg3);
  }
}
</style>
