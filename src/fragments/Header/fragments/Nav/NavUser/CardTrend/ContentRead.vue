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
      nickname: 'oooooohmygosh',
      avatar:
        '/i2.hdslb.com/bfs/face/54b2cb29d8222be20addda530fe954a53db4744b.jpg',
      uid: 38053181,
      isBusiness: false,
      isPersonal: true,
      isVip: true,
    },
    href: 'https://www.bilibili.com/read/cv20540416',
    name: 'oooooohmygosh',
    src: '/i0.hdslb.com/bfs/article/banner/34d0dc77cb46e6afb9eba49a8029c12c9abe1a60.png',
    title: '让我们在得意黑之外，再次相见吧。',
    date: '3小时前',
    checked: true,
  },
  {
    userInfo: {
      nickname: '哔哩哔哩大会员',
      avatar:
        '/i0.hdslb.com/bfs/face/0c84b9f4ad546d3f20324809d45fc439a2a8ddab.jpg',
      uid: 8047632,
      isBusiness: true,
      isPersonal: false,
      isVip: true,
    },
    href: 'https://www.bilibili.com/read/cv20532424',
    name: '哔哩哔哩大会员',
    src: '/i0.hdslb.com/bfs/article/4e265e065d955a0037406ab3ca041688bcb339b1.jpg',
    title: '嘴上喊着“退钱”的他，陪国足走了20多年',
    date: '8小时前',
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
    <ButtonBottom href="https://www.bilibili.com/read/home" />
  </ScrollContainer>
</template>
