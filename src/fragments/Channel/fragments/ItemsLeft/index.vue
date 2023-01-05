<script lang="ts" setup>
import Arrow from '@/components/Icon/Arrow.vue';
import { useChannelBreakpoints } from '@/composables/breakpoint';
import { computed, ref } from 'vue';
import ChannelItem from './ChannelItem.vue';

import type { Item } from '../../composables/channelItem';

const bk = useChannelBreakpoints();
const itemMaxCount = computed(() => {
  if (bk.smallerOrEqual('md').value) return 9 * 2;
  else if (bk.between('md', 'lg').value) return 11 * 2;
  else if (bk.between('lg', 'xl').value) return 12 * 2;
  else return 14 * 2;
});

const _itemList: Item[] = [
  {
    text: '番剧',
    href: 'https://www.bilibili.com/anime',
    subItems: [
      {
        text: '连载动画',
        href: 'https://www.bilibili.com/v/anime/serial',
      },
      {
        text: '完结动画',
        href: 'https://www.bilibili.com/v/anime/finish',
      },
      {
        text: '咨询',
        href: 'https://www.bilibili.com/v/anime/information',
      },
      {
        text: '官方延伸',
        href: 'https://www.bilibili.com/v/anime/offical',
      },
      {
        text: '新番时间表',
        href: 'https://www.bilibili.com/anime/timeline',
      },
      {
        text: '番剧索引',
        href: 'https://www.bilibili.com/anime/index',
      },
    ],
  },
  {
    text: '电影',
    href: 'https://www.bilibili.com/movie',
  },
  {
    text: '国创',
    href: 'https://www.bilibili.com/guochuang',
    subItems: [
      {
        text: '国产动画',
        href: 'https://www.bilibili.com/v/guochuang/chinese',
      },
      {
        text: '国产原创相关',
        href: 'https://www.bilibili.com/v/guochuang/original',
      },
      {
        text: '布袋戏',
        href: 'https://www.bilibili.com/v/guochuang/puppetry',
      },
      {
        text: '动态漫·广播剧',
        href: 'https://www.bilibili.com/v/guochuang/motioncomic',
      },
      {
        text: '资讯',
        href: 'https://www.bilibili.com/v/guochuang/information',
      },
      {
        text: '新番时间表',
        href: 'https://www.bilibili.com/guochuang/timeline',
      },
      {
        text: '国产动画索引',
        href: 'https://www.bilibili.com/guochuang/index',
      },
    ],
  },
  {
    text: '电视剧',
    href: 'https://www.bilibili.com/tv',
  },
  {
    text: '综艺',
    href: 'https://www.bilibili.com/variety',
  },
  {
    text: '纪录片',
    href: 'https://www.bilibili.com/documentary',
  },
  {
    text: '动画',
    href: 'https://www.bilibili.com/v/douga',
    subItems: [
      {
        text: 'MAD·AMV',
        href: 'https://www.bilibili.com/v/douga/mad',
      },
      {
        text: 'MMD·3D',
        href: 'https://www.bilibili.com/v/douga/mmd',
      },
      {
        text: '短片·手书·配音',
        href: 'https://www.bilibili.com/v/douga/voice',
      },
      {
        text: '手办·模玩',
        href: 'https://www.bilibili.com/v/douga/garage_kit',
      },
      {
        text: '特摄',
        href: 'https://www.bilibili.com/v/douga/tokusatsu',
      },
      {
        text: '动漫杂谈',
        href: 'https://www.bilibili.com/v/douga/acgntalks',
      },
      {
        text: '综合',
        href: 'https://www.bilibili.com/v/douga/other',
      },
    ],
  },
  {
    text: '游戏',
    href: 'https://www.bilibili.com/v/game',
    subItems: [
      {
        text: '单机游戏',
        href: 'https://www.bilibili.com/v/game/stand_alone',
      },
      {
        text: '电子竞技',
        href: 'https://www.bilibili.com/v/game/esports',
      },
      {
        text: '手机游戏',
        href: 'https://www.bilibili.com/v/game/mobile',
      },
      {
        text: '网络游戏',
        href: 'https://www.bilibili.com/v/game/online',
      },
      {
        text: '桌游棋牌',
        href: 'https://www.bilibili.com/v/game/board',
      },
      {
        text: 'GMV',
        href: 'https://www.bilibili.com/v/game/gmv',
      },
      {
        text: '音游',
        href: 'https://www.bilibili.com/v/game/music',
      },
      {
        text: 'Mugen',
        href: 'https://www.bilibili.com/v/game/mugen',
      },
      {
        text: '游戏赛事',
        href: 'https://www.bilibili.com/v/game/match',
      },
    ],
  },
  {
    text: '鬼畜',
    href: 'https://www.bilibili.com/v/kichiku',
    subItems: [
      {
        text: '鬼畜调教',
        href: 'https://www.bilibili.com/v/kichiku/guide',
      },
      {
        text: '音MAD',
        href: 'https://www.bilibili.com/v/kichiku/mad',
      },
      {
        text: '人力VOCALOID',
        href: 'https://www.bilibili.com/v/kichiku/manual_vocaloid',
      },
      {
        text: '鬼畜剧场',
        href: 'https://www.bilibili.com/v/kichiku/theatre',
      },
      {
        text: '教程演示',
        href: 'https://www.bilibili.com/v/kichiku/course',
      },
    ],
  },
  {
    text: '音乐',
    href: 'https://www.bilibili.com/v/music',
    subItems: [
      {
        text: '原创音乐',
        href: 'https://www.bilibili.com/v/music/original',
      },
      {
        text: '翻唱',
        href: 'https://www.bilibili.com/v/music/cover',
      },
      {
        text: '演奏',
        href: 'https://www.bilibili.com/v/music/perform',
      },
      {
        text: 'VOCALOID·UTAU',
        href: 'https://www.bilibili.com/v/music/vocaloid',
      },
      {
        text: '音乐现场',
        href: 'https://www.bilibili.com/v/music/live',
      },
      {
        text: 'MV',
        href: 'https://www.bilibili.com/v/music/mv',
      },
      {
        text: '乐评盘点',
        href: 'https://www.bilibili.com/v/music/commentary',
      },
      {
        text: '音乐教学',
        href: 'https://www.bilibili.com/v/music/tutorial',
      },
      {
        text: '音乐综合',
        href: 'https://www.bilibili.com/v/music/other',
      },
      {
        text: '说唱',
        href: 'https://www.bilibili.com/v/rap',
      },
    ],
  },
  {
    text: '舞蹈',
    href: 'https://www.bilibili.com/v/dance',
    subItems: [
      {
        text: '宅舞',
        href: 'https://www.bilibili.com/v/dance/otaku',
      },
      {
        text: '街舞',
        href: 'https://www.bilibili.com/v/dance/hiphop',
      },
      {
        text: '明星舞蹈',
        href: 'https://www.bilibili.com/v/dance/star',
      },
      {
        text: '中国舞',
        href: 'https://www.bilibili.com/v/dance/china',
      },
      {
        text: '舞蹈综合',
        href: 'https://www.bilibili.com/v/dance/three_d',
      },
      {
        text: '舞蹈教程',
        href: 'https://www.bilibili.com/v/dance/demo',
      },
    ],
  },
  {
    text: '影视',
    href: 'https://www.bilibili.com/v/cinephile',
    subItems: [
      {
        text: '影视杂谈',
        href: 'https://www.bilibili.com/v/cinephile/cinecism',
      },
      {
        text: '影视剪辑',
        href: 'https://www.bilibili.com/v/cinephile/montage',
      },
      {
        text: '小剧场',
        href: 'https://www.bilibili.com/v/cinephile/shortfilm',
      },
      {
        text: '预告·资讯',
        href: 'https://www.bilibili.com/v/cinephile/trailer_info',
      },
    ],
  },
  {
    text: '娱乐',
    href: 'https://www.bilibili.com/v/ent',
    subItems: [
      {
        text: '综艺',
        href: 'https://www.bilibili.com/v/ent/variety',
      },
      {
        text: '娱乐杂谈',
        href: 'https://www.bilibili.com/v/ent/talker',
      },
      {
        text: '粉丝创作',
        href: 'https://www.bilibili.com/v/ent/fans',
      },
      {
        text: '明星综合',
        href: 'https://www.bilibili.com/v/ent/celebrity',
      },
    ],
  },
  {
    text: '知识',
    href: 'https://www.bilibili.com/v/knowledge',
    subItems: [
      {
        text: '科学科普',
        href: 'https://www.bilibili.com/v/knowledge/science',
      },
      {
        text: '社科·法律·心理',
        href: 'https://www.bilibili.com/v/knowledge/social_science',
      },
      {
        text: '人文历史',
        href: 'https://www.bilibili.com/v/knowledge/humanity_history',
      },
      {
        text: '财经商业',
        href: 'https://www.bilibili.com/v/knowledge/business',
      },
      {
        text: '校园学习',
        href: 'https://www.bilibili.com/v/knowledge/campus',
      },
      {
        text: '职业职场',
        href: 'https://www.bilibili.com/v/knowledge/career',
      },
      {
        text: '设计·创意',
        href: 'https://www.bilibili.com/v/knowledge/design',
      },
      {
        text: '野生技能协会',
        href: 'https://www.bilibili.com/v/knowledge/skill',
      },
    ],
  },
  {
    text: '科技',
    href: 'https://www.bilibili.com/v/tech',
    subItems: [
      {
        text: '数码',
        href: 'https://www.bilibili.com/v/tech/digital',
      },
      {
        text: '软件应用',
        href: 'https://www.bilibili.com/v/tech/application',
      },
      {
        text: '计算机技术',
        href: 'https://www.bilibili.com/v/tech/computer_tech',
      },
      {
        text: '科工机械',
        href: 'https://www.bilibili.com/v/tech/industry',
      },
      {
        text: '极客DIY',
        href: 'https://www.bilibili.com/v/tech/diy',
      },
    ],
  },
  {
    text: '资讯',
    href: 'https://www.bilibili.com/v/information',
    subItems: [
      {
        text: '热点',
        href: 'https://www.bilibili.com/v/information/hotspot',
      },
      {
        text: '环球',
        href: 'https://www.bilibili.com/v/information/global',
      },
      {
        text: '社会',
        href: 'https://www.bilibili.com/v/information/social',
      },
      {
        text: '综合',
        href: 'https://www.bilibili.com/v/information/multiple',
      },
    ],
  },
  {
    text: '美食',
    href: 'https://www.bilibili.com/v/food',
    subItems: [
      {
        text: '美食制作',
        href: 'https://www.bilibili.com/v/food/make',
      },
      {
        text: '美食侦探',
        href: 'https://www.bilibili.com/v/food/detective',
      },
      {
        text: '美食评测',
        href: 'https://www.bilibili.com/v/food/measurement',
      },
      {
        text: '田园美食',
        href: 'https://www.bilibili.com/v/food/rural',
      },
      {
        text: '美食记录',
        href: 'https://www.bilibili.com/v/food/record',
      },
    ],
  },
  {
    text: '生活',
    href: 'https://www.bilibili.com/v/life',
    subItems: [
      {
        text: '搞笑',
        href: 'https://www.bilibili.com/v/life/funny',
      },
      {
        text: '亲子',
        href: 'https://www.bilibili.com/v/life/parenting',
      },
      {
        text: '出行',
        href: 'https://www.bilibili.com/v/life/travel',
      },
      {
        text: '三农',
        href: 'https://www.bilibili.com/v/life/rurallife',
      },
      {
        text: '家居房产',
        href: 'https://www.bilibili.com/v/life/home',
      },
      {
        text: '手工',
        href: 'https://www.bilibili.com/v/life/handmake',
      },
      {
        text: '绘画',
        href: 'https://www.bilibili.com/v/life/painting',
      },
      {
        text: '日常',
        href: 'https://www.bilibili.com/v/life/daily',
      },
    ],
  },
  {
    text: '汽车',
    href: 'https://www.bilibili.com/v/car',
    subItems: [
      {
        text: '赛车',
        href: 'https://www.bilibili.com/v/car/racing',
      },
      {
        text: '改装玩车',
        href: 'https://www.bilibili.com/v/car/modifiedvehicle',
      },
      {
        text: '新能源车',
        href: 'https://www.bilibili.com/v/car/newenergyvehicle',
      },
      {
        text: '房车',
        href: 'https://www.bilibili.com/v/car/touringcar',
      },
      {
        text: '摩托车',
        href: 'https://www.bilibili.com/v/car/motorcycle',
      },
      {
        text: '购车攻略',
        href: 'https://www.bilibili.com/v/car/strategy',
      },
      {
        text: '汽车生活',
        href: 'https://www.bilibili.com/v/car/life',
      },
    ],
  },
  {
    text: '时尚',
    href: 'https://www.bilibili.com/v/fashion',
    subItems: [
      {
        text: '美妆护肤',
        href: 'https://www.bilibili.com/v/fashion/makeup',
      },
      {
        text: '仿妆cos',
        href: 'https://www.bilibili.com/v/fashion/cos',
      },
      {
        text: '穿搭',
        href: 'https://www.bilibili.com/v/fashion/clothing',
      },
      {
        text: '时尚潮流',
        href: 'https://www.bilibili.com/v/fashion/trend',
      },
    ],
  },
  {
    text: '运动',
    href: 'https://www.bilibili.com/v/sports',
    subItems: [
      {
        text: '篮球',
        href: 'https://www.bilibili.com/v/sports/basketball',
      },
      {
        text: '足球',
        href: 'https://www.bilibili.com/v/sports/football',
      },
      {
        text: '健身',
        href: 'https://www.bilibili.com/v/sports/aerobics',
      },
      {
        text: '竞技体育',
        href: 'https://www.bilibili.com/v/sports/athletic',
      },
      {
        text: '运动文化',
        href: 'https://www.bilibili.com/v/sports/culture',
      },
      {
        text: '运动综合',
        href: 'https://www.bilibili.com/v/sports/comprehensive',
      },
    ],
  },
  {
    text: '动物圈',
    href: 'https://www.bilibili.com/v/animal',
    subItems: [
      {
        text: '喵星人',
        href: 'https://www.bilibili.com/v/animal/cat',
      },
      {
        text: '汪星人',
        href: 'https://www.bilibili.com/v/animal/dog',
      },
      {
        text: '小宠异常',
        href: 'https://www.bilibili.com/v/animal/reptiles',
      },
      {
        text: '野生动物',
        href: 'https://www.bilibili.com/v/animal/wild_animal',
      },
      {
        text: '动物二创',
        href: 'https://www.bilibili.com/v/animal/second_edition',
      },
      {
        text: '动物综合',
        href: 'https://www.bilibili.com/v/animal/animal_composite',
      },
    ],
  },
  {
    text: 'VLOG',
    href: 'https://www.bilibili.com/v/life/daily#/530003',
  },
  {
    text: '搞笑',
    href: 'https://www.bilibili.com/v/life/funny',
  },
  {
    text: '单机游戏',
    href: 'https://www.bilibili.com/v/game/stand_alone',
  },
  {
    text: '虚拟UP主',
    href: 'https://www.bilibili.com/v/virtual',
  },
  {
    text: '公益',
    href: 'https://love.bilibili.com',
  },
  {
    text: '公开课',
    href: 'https://www.bilibili.com',
  },
];

const itemList = computed(() => {
  if (_itemList.length > itemMaxCount.value)
    return _itemList.slice(0, itemMaxCount.value - 1);
  else return _itemList;
});
const itemListMore = computed(() => {
  if (_itemList.length > itemMaxCount.value)
    return _itemList.slice(itemMaxCount.value - 1);
  else return [];
});
const hasMore = computed(() => !!itemListMore.value.length);
const moreMenuOpened = ref(false);
</script>

<template>
  <div class="channel-left-items">
    <ChannelItem
      v-for="(item, i) in itemList"
      v-bind="item"
      :direction="i % 2 === 0 ? 'top' : 'bottom'" />
    <ChannelItem
      :class="['item-more', { 'item-more--open': moreMenuOpened }]"
      v-show="hasMore"
      :sub-items="itemListMore"
      direction="bottom"
      @open-menu="moreMenuOpened = true"
      @close-menu="moreMenuOpened = false">
      <span class="text">更多</span><Arrow class="arrow" />
    </ChannelItem>
  </div>
</template>

<style lang="scss" scoped>
@use '@/style/break-point' as * with($key: channel);
.channel-left-items {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  @include mq($until: md) {
    grid-template-columns: repeat(9, 1fr);
  }
  @include mq($from: md, $until: lg) {
    grid-template-columns: repeat(11, 1fr);
  }
  @include mq($from: lg, $until: xl) {
    grid-template-columns: repeat(12, 1fr);
  }
  @include mq($from: xl) {
    grid-template-columns: repeat(14, 1fr);
  }

  .item-more {
    .text {
      letter-spacing: 0;
      margin-right: 5px;
    }
    .arrow {
      transition: transform 0.3s;
    }
  }
  .item-more--open {
    .arrow {
      transform: rotate(180deg);
    }
  }
}
</style>
