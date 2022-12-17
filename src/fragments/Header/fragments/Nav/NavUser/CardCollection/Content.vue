<script lang="ts" setup>
import { makeUserInfoPropsSimple } from '@/composables/userInfo';
import ScrollContainer from '../../components/ScrollContainer.vue';
import Graph from '@/components/Graph/index.vue';
import IconPlay from '@/components/Icon/Play.vue';
import { computed } from 'vue';
import Item from './Item.vue';
import type { Item as ItemType } from './constant';

const props = defineProps({
  ...makeUserInfoPropsSimple(),
  collectionId: [Number, String],
});

const isWatchLater = computed(() => props.collectionId == 0);

const viewAllUrl = computed(() =>
  isWatchLater.value
    ? 'https://www.bilibili.com/watchlater/#/list'
    : `https://space.bilibili.com/${props.userInfo?.uid}/favlist?fid=${props.collectionId}&ftype=create`,
);

const playAllUrl = computed(() =>
  isWatchLater.value
    ? 'https://www.bilibili.com/medialist/play/watchlater'
    : `https://www.bilibili.com/medialist/play/ml${props.collectionId}`,
);

const _dataMap: Record<number, ItemType[]> = {
  72475430: [],
  0: [
    {
      title: '《侠者》第一段分镜，用动态分镜说故事，希望大家支持',
      name: '纳木错大海',
      src: '/i1.hdslb.com/bfs/archive/3fabcfa00183c1766f7f54e1e92e38ba5ce9e679.jpg',
      duration: '11:25',
      href: 'https://www.bilibili.com/video/BV1CD4y1Y7LX',
    },
  ],
  1873338430: [
    {
      title:
        '【四川师范大学】写作学 | 如何写作 写作思维训练（本课程团队：1位教授 6位副教授）',
      name: 'WU_Eric',
      src: '/i2.hdslb.com/bfs/archive/4f44bbf659f2736af196f5fe0f7b1a0d5b9a132f.jpg',
      duration: '47:12:12',
      href: 'https://www.bilibili.com/video/BV1sJ41177oi',
    },
  ],
  316424930: [
    {
      title: '【4k修复/剧场版】机动战士高达 逆袭的夏亚（1988）',
      name: '寂寞DEATH',
      src: '/i0.hdslb.com/bfs/archive/779d5a15c4501bb70fd415757620d5128e33ad49.jpg',
      duration: '01:59:55',
      href: 'https://www.bilibili.com/video/BV1Dt411f7XB',
    },
  ],
  946357030: [
    {
      title: '【LPL春季赛】4月5日 RNG vs IG',
      name: '哔哩哔哩英雄联盟赛事',
      src: '/i1.hdslb.com/bfs/archive/c68b157977541a42e26bbc8d02ef8689c4247956.jpg',
      duration: '02:26:23',
      href: 'https://www.bilibili.com/video/BV1GZ4y1x7Yy',
    },
  ],
  736691030: [
    {
      title: '【ONE OK ROCK】2012 残响 暗恋相爱分手五部曲',
      name: 'fakebit117',
      src: '/i0.hdslb.com/bfs/archive/2d3ea144edee594afd233113dfd9d93da2200fd4.jpg',
      duration: '26:46',
      href: 'https://www.bilibili.com/video/BV15s411z7DD',
    },
  ],
  728566130: [
    {
      title:
        '【评头论足】价格翻三倍！奇怪的强袭又增加了！ HGBF 新星强袭高达 模型介绍',
      name: '-评头论足-',
      src: '/i2.hdslb.com/bfs/archive/f84d7de772ee6da94b0c1e619af502d6603432be.jpg',
      duration: '08:29',
      href: 'https://www.bilibili.com/video/BV1gk4y1y7co',
    },
  ],
  98495030: [
    {
      title: '【BDRip】浪客剑心追忆篇',
      name: '天野雪輝',
      src: '/i0.hdslb.com/bfs/archive/f38062b31591daf0bf3bc4365b65290df76ce264.jpg',
      duration: '01:56:40',
      href: 'https://www.bilibili.com/video/BV1Mx411w7j3',
    },
  ],
  126361830: [
    {
      title: '【CSGO ESL Pro S10 总决赛】Team Liquid vs Astralis  (1080p 60帧)',
      name: '夢灯籠DL',
      src: '/i2.hdslb.com/bfs/archive/9dae7b02bc8d3ef7a32f75ed849793e1016e557e.jpg',
      duration: '02:54:38',
      href: 'https://www.bilibili.com/video/BV1bJ411i7TE',
    },
  ],
  106044430: [
    {
      title: '【动画/科幻/冒险】刀剑神域：序列之争（2017）',
      name: '哔哩哔哩电影',
      src: '/i1.hdslb.com/bfs/archive/86ec94eb1e00785d15612b700e95eb309710597a.jpg',
      duration: '02:00:00',
      href: 'https://www.bilibili.com/video/BV1cW411a7ed',
    },
  ],
  102464130: [
    {
      title: '【只狼】超越动作电影的极致华丽打斗 苇名之狼VS巅峰剑圣',
      name: '萨摩定春',
      src: '/i1.hdslb.com/bfs/archive/d6f63f465deabcb9447d3600bd88c483e8b2d1cd.jpg',
      duration: '08:32',
      href: 'https://www.bilibili.com/video/BV1V4411h7f8',
    },
  ],
  102437130: [
    {
      title: '【LIVE】空之境界全七章ED现场演唱【Kalafina】',
      name: 'ParadoxのAI',
      src: '/i2.hdslb.com/bfs/archive/f8425395e46ce699bbf6da12061110c0675d1242.jpg',
      duration: '37:55',
      href: 'https://www.bilibili.com/video/BV1zx411w7H7',
    },
  ],
};

const dataList = computed(() => _dataMap[props.collectionId as number] || []);
</script>

<template>
  <div class="collection-container">
    <template v-if="!!dataList.length">
      <ScrollContainer class="collection-content">
        <Item v-for="data in dataList" v-bind="data" />
      </ScrollContainer>
      <div class="action">
        <Graph class="action__view-all" :href="viewAllUrl">查看全部</Graph>
        <Graph class="action__play-all" :href="playAllUrl"
          ><IconPlay class="icon" /> 播放全部</Graph
        >
      </div>
    </template>
    <div v-else class="empty-tip">该收藏夹还没有视频哦~</div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/style/mixins.scss' as *;
.collection-container {
  display: flex;
  flex-direction: column;
  .collection-content {
    flex-grow: 1;
    flex-shrink: 0;
    padding: 12px 0;
  }
  .action > * {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    line-height: 45px;
    height: 45px;
    font-size: var(--fs2);
    text-align: center;
  }

  .action {
    border-top: 1px solid var(--line_regular);
    display: flex;
    &__play-all {
      @include flex-center();
      color: var(--brand_blue);
      .icon {
        margin-right: 6px;
      }
    }
    &__view-all {
      color: var(--text1);
      border-right: 1px solid var(--line_regular);
    }
  }

  .empty-tip {
    @include flex-center();
    color: var(--text3);
    font-size: var(--fs2);
    flex-grow: 1;
  }
}
</style>
