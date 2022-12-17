<script lang="ts" setup>
import ScrollContainer from '../../components/ScrollContainer.vue';
import ButtonBottom from './components/ButtonBottom.vue';
import NoMoreTip from './components/NoMoreTip.vue';
import SplitHistory from './components/SplitHistory.vue';
import type { Item as ItemType } from './constant';
import Item from './Item.vue';
import { showHistorySplit, showNoMoreTip } from './utils';

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
    checked: false,
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
    checked: false,
  },
  {
    userInfo: {
      nickname: 'CSGO官方赛事',
      avatar:
        '/i1.hdslb.com/bfs/face/0c89136f648dbf1f1145a7af13eb06ae984de0c4.jpg',
      uid: 474595627,
      isBusiness: true,
      isPersonal: false,
      isVip: false,
    },
    href: 'https://www.bilibili.com/video/BV1Hv4y197pu',
    name: 'CSGO官方赛事',
    src: '/i2.hdslb.com/bfs/archive/41e3888a33a7cb2e7b1cdadc00e88561c59603a5.jpg',
    title: '【BLAST世界总决赛】Liquid VS NAVI 12月16日 淘汰赛',
    date: '15小时前',
    checked: true,
  },
  {
    userInfo: {
      nickname: '纯路人茉日天',
      avatar:
        '/i1.hdslb.com/bfs/face/bd9b746f9c5e6ca5a9aa0d077176ff0eb33db3b8.jpg',
      uid: 351219814,
      isBusiness: false,
      isPersonal: false,
      isVip: true,
    },
    href: 'https://www.bilibili.com/video/BV1HM411U7xv',
    name: '纯路人茉日天',
    src: '/i1.hdslb.com/bfs/archive/a38fdbe4fc2206c7c7ccae40e7947e412d7e797f.jpg',
    title: '分享下 我阳后 都吃了什么',
    date: '16小时前',
    checked: true,
  },
];
</script>

<template>
  <ScrollContainer>
    <NoMoreTip v-if="showNoMoreTip(dataList)" />
    <template v-for="(data, i) in dataList">
      <SplitHistory v-if="showHistorySplit(dataList, i)" />
      <Item v-bind="data" type="video" />
    </template>
    <ButtonBottom href="https://t.bilibili.com" />
  </ScrollContainer>
</template>
