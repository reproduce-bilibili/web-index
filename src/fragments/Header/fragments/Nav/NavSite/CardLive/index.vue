<script lang="ts" setup>
import { computed } from 'vue';
import LiveActivity, { ItemActivityLive } from './LiveActivity.vue';
import LivePanel, { ItemPanelLive } from './LivePanel.vue';

const panelList = computed<ItemPanelLive[]>(() =>
  new Array<ItemPanelLive>(6).fill({
    href: 'https://live.bilibili.com/77950',
    src: '/assets/card_live/panel_1.webp',
    title: 'NoraH1to',
  }),
);

const activityList = computed<ItemActivityLive[]>(() => [
  {
    href: 'https://www.bilibili.com/blackboard/dynamic/310232?spm_id_from=333.1007.0.0',
    src: '/assets/card_live/activity_1.webp',
  },
  {
    href: 'https://live.bilibili.com/21144080?spm_id_from=333.1007.0.0',
    src: '/assets/card_live/activity_2.webp',
  },
]);
</script>

<template>
  <div class="card-live">
    <div class="card-live-left">
      <div class="card-live-left__title card-live__title">热门直播：</div>
      <LivePanel class="card-live-left__content card-live__content" :panel-list="panelList" />
    </div>
    <div class="card-live-right">
      <div class="card-live-right__title card-live__title">热门活动：</div>
      <LiveActivity
        class="card-live-right__content card-live__content"
        :activity-list="activityList" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-live {
  display: flex;
  flex-direction: row;
  &__title {
    font-size: var(--fs5);
    line-height: 28px;
    color: var(--text1);
    margin-bottom: 16px;
  }
  &__content {
    flex-grow: 1;
  }
  &-left {
    width: 276px;
    padding: 20px 0 20px 20px;
    &__content {
      padding-right: 20px;
      border-right: 0.5px solid var(--line_regular);
    }
  }
  &-right {
    width: 274px;
    padding: 20px;
  }
  &-left,
  &-right {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 0;
  }
}
</style>
