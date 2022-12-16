<script lang="ts" setup>
import ScrollContainer from '../../components/ScrollContainer.vue';
import ButtonBottom from './components/ButtonBottom.vue';
import type { Item as ItemType } from './constant';
import Item from './Item.vue';

const dataList: ItemType[] = [
  {
    userInfo: {
      nickname: '莱昂凯shyeark',
      avatar:
        '/i2.hdslb.com/bfs/face/58769a500f3a89de34c4fe78eb38dd0f2e5a6b60.jpg',
      uid: 107873360,
      isBusiness: false,
      isPersonal: true,
      isVip: true,
    },
    href: 'https://www.bilibili.com/video/BV1ed4y1v7LZ',
    name: '莱昂凯shyeark',
    src: '/i0.hdslb.com/bfs/archive/efe8dc6ff35db4bb918f55650418b9fb6d1d94cf.jpg',
    title: 'NAVI如果不做出一些改变，今晚打液体依旧会很艰难',
    date: '54分钟前',
  },
  {
    userInfo: {
      nickname: 'Google中国',
      avatar:
        '/i1.hdslb.com/bfs/face/1ed489ddefe1a1fd1dd012dbf17f277d1df39ab9.jpg',
      uid: 64169458,
      isBusiness: true,
      isPersonal: false,
      isVip: false,
    },
    href: 'https://www.bilibili.com/video/BV1tG4y1u7fb',
    name: 'Google中国',
    src: '/i2.hdslb.com/bfs/archive/0b5b7a8e2a7f53f06096616ddf115629dbe8a1c3.jpg',
    title: 'Flutter Widgets 介绍合集 —— 118. Badges',
    date: '10小时前',
  },
];
</script>

<template>
  <ScrollContainer>
    <Item v-for="data in dataList" v-bind="data" type="video" />
    <ButtonBottom href="https://t.bilibili.com" />
  </ScrollContainer>
</template>
