<script lang="ts" setup>
import Item from './Item.vue';
import Graph from '@/components/Graph/index.vue';
import DateTitle from './components/DateTitle.vue';
import { computed, PropType } from 'vue';

const props = defineProps({
  type: {
    type: String as PropType<'live' | 'video' | 'read'>,
    required: true,
  },
});

interface Data {
  deviceType: 'mobile' | 'pc';
  [key: string]: any;
}

const dataListVideo: Data[] = [
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
const dataListLive: Data[] = [
  {
    title: 'shift键已抠',
    src: '/i0.hdslb.com/bfs/live/new_room_cover/26976ba6a8e342880aebf07f5038d323a02ab391.jpg@256w_144h_1c.webp',
    date: '今天 16:06',
    deviceType: 'pc',
    name: 'NoraH1to',
    href: 'https://live.bilibili.com/77950',
    isActive: false,
  },
  {
    title: '鸭鸭杀，骗子太多傻子用不完了',
    src: '/i0.hdslb.com/bfs/live/new_room_cover/85037793aaa5135cfe9835c7d7425b336108f6e4.jpg@256w_144h_1c.webp',
    date: '今天 16:06',
    deviceType: 'pc',
    name: 'KB呆又呆',
    href: 'https://live.bilibili.com/1010',
    isActive: true,
  },
  {
    title: '夺冠第4天：没有感觉',
    src: '/i0.hdslb.com/bfs/live/new_room_cover/9a84ef2d81eed4b1a78e76885ceff4f879604aeb.jpg@256w_144h_1c.webp',
    date: '昨天 13:21',
    deviceType: 'mobile',
    name: '守护茶茶',
    href: 'https://live.bilibili.com/1440094',
    isActive: true,
  },
  {
    title: '最终幻想7前传 核心危机',
    src: '/i0.hdslb.com/bfs/live/new_room_cover/eda33aaaf23e1fda2e88ccf1cb6e2114221ca653.jpg@256w_144h_1c.webp',
    date: '昨天 13:20',
    deviceType: 'mobile',
    name: '黑桐谷歌',
    href: 'https://live.bilibili.com/1029',
    isActive: false,
  },
  {
    title: '抽个奖！',
    src: '/i0.hdslb.com/bfs/live/new_room_cover/27866cf56a09b0d86793b6b8e1a7150c6b57893c.jpg@256w_144h_1c.webp',
    date: '12-07 13:00',
    deviceType: 'mobile',
    name: '视角姬',
    href: 'https://live.bilibili.com/5054',
    isActive: false,
  },
  {
    title: '魔法使之夜',
    src: '/i0.hdslb.com/bfs/live/new_room_cover/26d23296f1cc0e4f079601a4c97d3da39f814dcc.jpg@256w_144h_1c.webp',
    date: '12-01 18:17',
    deviceType: 'mobile',
    name: 'C酱です',
    href: 'https://live.bilibili.com/47867',
    isActive: true,
  },
];
const dataListRead: Data[] = [
  {
    title: '替身文学or老贼的恶趣味',
    src: '/i0.hdslb.com/bfs/article/8d4ed7e5025f1999baa7ab432009a1d9eae04c5e.png@192w_144h_1c.webp',
    date: '今天 20:28',
    deviceType: 'pc',
    name: '纸箱里的绵羊',
    href: 'https://www.bilibili.com/read/cv16854646',
  },
  {
    title:
      'APEX英雄 视频设置 | 启动项 | 系统设置 | Videoconfig 中文注释 - 桐生KiryuZ',
    src: '/i0.hdslb.com/bfs/article/31cb3c30155262ce74fed21ee1d8655d4cfc4dc1.png@192w_144h_1c.webp',
    date: '今天 13:38',
    deviceType: 'pc',
    name: '桐生KiryuZ',
    href: 'https://www.bilibili.com/read/cv15009093',
  },
  {
    title: '我的世界RLcraft整合包部分mod介绍第三期',
    src: '/i0.hdslb.com/bfs/article/782084154f88953039e852812d9f66a2b9a235ef.png@192w_144h_1c.webp',
    date: '昨天 17:49',
    deviceType: 'pc',
    name: '千厘不留行',
    href: 'https://www.bilibili.com/read/cv18421140',
  },
  {
    title: '信息奴役之下能有独立思考吗？如何挣脱虚拟与现实的混沌',
    src: '/i0.hdslb.com/bfs/article/banner/9d5ea3f130e7d66b1f477ed0bcd87ced6430f4f8.png@192w_144h_1c.webp',
    date: '昨天 13:38',
    deviceType: 'mobile',
    name: '小寧童鞋',
    href: 'https://www.bilibili.com/read/cv20082513',
  },
  {
    title: '人贵有“残忍”的一面，只有懂得恶的人才能真正做到不作恶',
    src: '/i0.hdslb.com/bfs/article/banner/8befc23f3b56f131f14a80084f9881e620b0819b.png@192w_144h_1c.webp',
    date: '11-29 20:22',
    deviceType: 'mobile',
    name: 'muteroe',
    href: 'https://www.bilibili.com/read/cv19673364',
  },
  {
    title: '龙与虎到底是不是适合所有人？',
    src: '/i0.hdslb.com/bfs/article/a82715287e363c1dffca002a18611ab2dfbd2d6e.png@192w_144h_1c.webp',
    date: '11-27 19:28',
    deviceType: 'pc',
    name: '狮驼岭精神病院院长',
    href: 'https://www.bilibili.com/read/cv6126131',
  },
];
const dataList = computed(() => {
  if (props.type === 'video') return dataListVideo;
  else if (props.type === 'live') return dataListLive;
  else return dataListRead;
});
</script>

<template>
  <div class="history-video">
    <DateTitle>今天</DateTitle>
    <Item
      class="item"
      v-for="data in dataList.slice(0, 2)"
      :key="data.title"
      :type="type"
      v-bind="data">
    </Item>
    <DateTitle>昨天</DateTitle>
    <Item
      class="item"
      v-for="data in dataList.slice(2, 4)"
      :key="data.title"
      :type="type"
      v-bind="data">
    </Item>
    <DateTitle>更早</DateTitle>
    <Item
      class="item"
      v-for="data in dataList.slice(4, 6)"
      :key="data.title"
      :type="type"
      v-bind="data">
    </Item>
    <Graph class="bottom-button" href="https://www.bilibili.com/account/history"
      >查看全部</Graph
    >
  </div>
</template>

<style lang="scss" scoped>
.history-video {
  min-height: 100%;
  position: relative;
  .bottom-button {
    margin: 16px 18px;
    display: block;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: var(--text2);
    font-size: var(--fs2);
    background-color: var(--bg2);
    border-radius: var(--radius2);
    transition: color 0.3s;
    &:hover {
      color: var(--text1);
    }
  }
}
</style>
