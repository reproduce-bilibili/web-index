<script lang="ts" setup>
import ScrollContainer from '../../components/ScrollContainer.vue';
import ButtonBottom from './components/ButtonBottom.vue';
import type { Item as ItemType } from './constant';
import Item from './Item.vue';

const dataList: Omit<ItemType, 'date' | 'checked'>[] = [
  {
    userInfo: {
      nickname: '熙狗Game',
      avatar:
        '/i2.hdslb.com/bfs/face/95ece28fde3dd948e999ef961fdc7bc15b41a800.jpg',
      uid: 50366363,
      isBusiness: false,
      isPersonal: true,
      isVip: true,
    },
    href: 'https://live.bilibili.com/21772759?broadcast_type=0',
    name: '熙狗Game',
    src: '/i0.hdslb.com/bfs/live/new_room_cover/78f4e9617e73e4e273098256f6cc0e4983887666.jpg',
    title: '音乐餐厅',
  },
  {
    userInfo: {
      nickname: '-纯黑-',
      avatar:
        '/i0.hdslb.com/bfs/face/e8ab7b02d6576f4141ea857734b68b9dd35a5730.jpg',
      uid: 585267,
      isBusiness: true,
      isPersonal: false,
      isVip: false,
    },
    href: 'https://live.bilibili.com/1023?broadcast_type=0',
    name: '-纯黑-',
    src: '/i0.hdslb.com/bfs/live/new_room_cover/028ee4ed60a5e958f82e4cc8782c232d2f3160cd.jpg',
    title: '民风最淳朴的地方是',
  },
];
</script>

<template>
  <ScrollContainer>
    <Item v-for="data in dataList" v-bind="data" type="live" />
    <ButtonBottom
      href="https://link.bilibili.com/p/center/index#/user-center/follow/1" />
  </ScrollContainer>
</template>
