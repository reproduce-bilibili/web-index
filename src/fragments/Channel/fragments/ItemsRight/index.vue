<script lang="ts" setup>
import type { Item } from '../../composables/channelItem';
import ChannelItem from './ChannelItem.vue';
const itemList: (Item & { iconName: string })[] = [
  {
    text: '专栏',
    iconName: 'header-channel-read',
    href: 'https://www.bilibili.com/read/home',
  },
  {
    text: '直播',
    iconName: 'header-channel-live',
    href: 'https://live.bilibili.com/',
    subItems: [
      {
        text: '全部',
        href: 'https://live.bilibili.com/all?visit_id=5icxsa0kmts0',
      },
      {
        text: '网游',
        href: 'https://live.bilibili.com/p/eden/area-tags?parentAreaId=2&areaId=0&visit_id=5icxsa0kmts0#/2/0',
      },
      {
        text: '手游',
        href: 'https://live.bilibili.com/p/eden/area-tags?parentAreaId=3&areaId=0&visit_id=5icxsa0kmts0#/3/0',
      },
      {
        text: '单机',
        href: 'https://live.bilibili.com/p/eden/area-tags?parentAreaId=6&areaId=0',
      },
      {
        text: '娱乐',
        href: 'https://live.bilibili.com/p/eden/area-tags?parentAreaId=1&areaId=0&visit_id=5icxsa0kmts0#/1/0',
      },
      {
        text: '电台',
        href: 'https://live.bilibili.com/p/eden/area-tags?parentAreaId=5&areaId=0&visit_id=5icxsa0kmts0#/5/0',
      },
      {
        text: '虚拟',
        href: 'https://live.bilibili.com/p/eden/area-tags?parentAreaId=9&areaId=0',
      },
      {
        text: '生活',
        href: 'https://live.bilibili.com/p/eden/area-tags?parentAreaId=10&areaId=0',
      },
      {
        text: '知识',
        href: 'https://live.bilibili.com/p/eden/area-tags?parentAreaId=11&areaId=0',
      },
      {
        text: '赛事',
        href: 'https://live.bilibili.com/p/eden/area-tags?parentAreaId=13&areaId=0',
      },
    ],
  },
  {
    text: '活动',
    iconName: 'header-channel-activity',
    href: 'https://www.bilibili.com/blackboard/activity-list.html',
  },
  {
    text: '课堂',
    iconName: 'header-channel-class',
    href: 'https://www.bilibili.com/cheese/?csource=common_hp_channelclass_icon',
    subItems: [
      {
        text: '通识科普',
        href: 'https://www.bilibili.com/cheese/category?first=95&csource=common_hp_channelclass_hover',
      },
      {
        text: '语言学习',
        href: 'https://www.bilibili.com/cheese/category?first=93&csource=common_hp_channelclass_hover',
      },
      {
        text: '考研',
        href: 'https://www.bilibili.com/cheese/category?first=88&csource=common_hp_channelclass_hover',
      },
      {
        text: '视频制作',
        href: 'https://www.bilibili.com/cheese/category?first=91&csource=common_hp_channelclass_hover',
      },
      {
        text: '考试考证',
        href: 'https://www.bilibili.com/cheese/category?first=87&csource=common_hp_channelclass_hover',
      },
      {
        text: '设计创作',
        href: 'https://www.bilibili.com/cheese/category?first=90&csource=common_hp_channelclass_hover',
      },
      {
        text: 'IT培训',
        href: 'https://www.bilibili.com/cheese/category?first=89&csource=common_hp_channelclass_hover',
      },
      {
        text: '兴趣生活',
        href: 'https://www.bilibili.com/cheese/category?first=94&csource=common_hp_channelclass_hover',
      },
      {
        text: '职场提升',
        href: 'https://www.bilibili.com/cheese/category?first=92&csource=common_hp_channelclass_hover',
      },
      {
        text: '我的课程',
        href: 'https://www.bilibili.com/cheese/mine/list?csource=common_hp_channelclass_hover',
      },
    ],
  },
  {
    text: '社区中心',
    iconName: 'header-channel-blackboard',
    href: 'https://www.bilibili.com/blackboard/activity-5zJxM3spoS.html',
  },
  {
    text: '新歌热榜',
    iconName: 'header-channel-music',
    href: 'https://www.bilibili.com/v/musicplus/',
  },
];
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
