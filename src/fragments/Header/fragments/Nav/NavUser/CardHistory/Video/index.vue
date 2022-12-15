<script lang="ts" setup>
import Item from './Item.vue';
import Button from '../History/Button.vue';
import DateTitle from '../History/components/DateTitle.vue';

const dataListToday: { deviceType: 'mobile' | 'pc'; [key: string]: any }[] = [
  {
    title: '当你和一个只会玩梗的朋友聊天，拳头硬了',
    src: '/i0.hdslb.com/bfs/archive/37085b88e2334fb5853b3b21140fd064f69ac35e.jpg@256w_144h_1c.webp',
    date: '今天 13:23',
    deviceType: 'pc',
    name: '文西与阿漆',
    href: 'https://www.bilibili.com/video/BV1o8411j7ny',
    timeRange: ['00:03', '02:48'],
  },
  {
    title: '低俗小说「Surf Rider」贝斯Cover',
    src: '/i2.hdslb.com/bfs/archive/528699c3d47c76a94f104f89cc9c0f289ab44b1c.jpg@256w_144h_1c.webp',
    date: '今天 12:54',
    deviceType: 'mobile',
    name: '工业废料泡泡',
    href: 'https://www.bilibili.com/video/BV1ZR4y1k7cx',
    timeRange: ['01:04', '03:20'],
  },
  {
    title: '【Bass】低像素后朋克Lebanon Hanover-Gallowdance',
    src: '/i1.hdslb.com/bfs/archive/72e787dd738a94b5edf5fe7c46822b76e8b15f19.jpg@256w_144h_1c.webp',
    date: '昨天 12:51',
    deviceType: 'mobile',
    name: '工业废料泡泡',
    href: 'https://www.bilibili.com/video/BV1Fe4y167BW',
    timeRange: ['00:36', '02:14'],
  },
  {
    title: '一人乐队Cover意大利厄运金属Messa（Leah）',
    src: '/i1.hdslb.com/bfs/archive/5feb23d0bc0c864057fd8f43cfc1321a297565d7.jpg@256w_144h_1c.webp',
    date: '昨天 12:50',
    deviceType: 'mobile',
    name: '工业废料泡泡',
    href: 'https://www.bilibili.com/video/BV1XG4y1u7gV',
    timeRange: ['01:58', '06:06'],
  },
  {
    title: '自信过头了 那就是精彩的白给',
    src: '/i2.hdslb.com/bfs/archive/29e6d6d35d5efd525446753ba923217f6769921e.jpg@256w_144h_1c.webp',
    date: '12:13 18:32',
    deviceType: 'mobile',
    name: '如风SN',
    href: 'https://www.bilibili.com/video/BV1SG4y1u7v6',
    timeRange: ['09:32', '09:32'],
  },
  {
    title: '一条命不够打你们七个 那就再来一次',
    src: '/i0.hdslb.com/bfs/archive/8b9035f94ec75a87ff08e8b71a823d9a0169f561.jpg@256w_144h_1c.webp',
    date: '12:13 18:24',
    deviceType: 'mobile',
    name: '如风SN',
    href: 'https://www.bilibili.com/video/BV1se4y1M78h',
    timeRange: ['13:55', '13:55'],
  },
];
</script>

<template>
  <div class="history-video">
    <DateTitle>今天</DateTitle>
    <Item
      class="item"
      v-for="data in dataListToday.slice(0, 2)"
      :key="data.title"
      v-bind="data">
    </Item>
    <DateTitle>昨天</DateTitle>
    <Item
      class="item"
      v-for="data in dataListToday.slice(2, 4)"
      :key="data.title"
      v-bind="data">
    </Item>
    <DateTitle>更早</DateTitle>
    <Item
      class="item"
      v-for="data in dataListToday.slice(4, 6)"
      :key="data.title"
      v-bind="data">
    </Item>
    <Button class="bottom-button" href="https://www.bilibili.com/account/history">查看全部</Button>
  </div>
</template>

<style lang="scss" scoped>
.history-video {
  min-height: 100%;
  position: relative;
  .bottom-button {
    margin: 16px 18px;
  }
}
</style>
