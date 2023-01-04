<script lang="ts" setup>
import SvgIcon from '@/components/SvgIcon.vue';
import NavListItem from '@/components/NavList/NavListItem.vue';
type Item = {
  svgName: string;
  text: string;
  href: string;
};
const menuCollection: Array<Array<Item>> = [
  [
    {
      svgName: 'channel-anime',
      text: '番剧',
      href: 'https://www.bilibili.com/anime/',
    },
    {
      svgName: 'channel-movie',
      text: '电影',
      href: 'https://www.bilibili.com/movie/',
    },
    {
      svgName: 'channel-guochuang',
      text: '国创',
      href: 'https://www.bilibili.com/guochuang/',
    },
    {
      svgName: 'channel-teleplay',
      text: '电视',
      href: 'https://www.bilibili.com/tv/',
    },
    {
      svgName: 'channel-zongyi',
      text: '综艺',
      href: 'https://www.bilibili.com/variety/',
    },
    {
      svgName: 'channel-documentary',
      text: '纪录片',
      href: 'https://www.bilibili.com/documentary',
    },
    {
      svgName: 'channel-douga',
      text: '动画',
      href: 'https://www.bilibili.com/v/douga/',
    },
    {
      svgName: 'channel-game',
      text: '游戏',
      href: 'https://www.bilibili.com/v/game/',
    },
    {
      svgName: 'channel-kichiku',
      text: '鬼畜',
      href: 'https://www.bilibili.com/v/kichiku/',
    },
    {
      svgName: 'channel-music',
      text: '音乐',
      href: 'https://www.bilibili.com/v/music',
    },
  ],
  [
    {
      svgName: 'channel-dance',
      text: '舞蹈',
      href: 'https://www.bilibili.com/v/dance/',
    },
    {
      svgName: 'channel-cinephile',
      text: '影视',
      href: 'https://www.bilibili.com/v/cinephile',
    },
    {
      svgName: 'channel-ent',
      text: '娱乐',
      href: 'https://www.bilibili.com/v/ent/',
    },
    {
      svgName: 'channel-knowledge',
      text: '知识',
      href: 'https://www.bilibili.com/v/knowledge/',
    },
    {
      svgName: 'channel-tech',
      text: '科技',
      href: 'https://www.bilibili.com/v/tech/',
    },
    {
      svgName: 'channel-information',
      text: '资讯',
      href: 'https://www.bilibili.com/v/information/',
    },
    {
      svgName: 'channel-food',
      text: '美食',
      href: 'https://www.bilibili.com/v/food',
    },
    {
      svgName: 'channel-life',
      text: '生活',
      href: 'https://www.bilibili.com/v/life',
    },
    {
      svgName: 'channel-car',
      text: '汽车',
      href: 'https://www.bilibili.com/v/car',
    },
    {
      svgName: 'channel-fashion',
      text: '时尚',
      href: 'https://www.bilibili.com/v/fashion',
    },
  ],
  [
    {
      svgName: 'channel-sports',
      text: '运动',
      href: 'https://www.bilibili.com/v/sports',
    },
    {
      svgName: 'channel-animal',
      text: '动物圈',
      href: 'https://www.bilibili.com/v/animal',
    },
    {
      svgName: 'channel-vlog',
      text: 'VLOG',
      href: 'https://www.bilibili.com/v/life/daily//530003',
    },
    {
      svgName: 'channel-gaoxiao',
      text: '搞笑',
      href: 'https://www.bilibili.com/v/life/funny',
    },
    {
      svgName: 'channel-danjiyouxi',
      text: '单机游戏',
      href: 'https://www.bilibili.com/v/game/stand_alone',
    },
    {
      svgName: 'channel-vtuber',
      text: '虚拟UP主',
      href: 'https://www.bilibili.com/v/virtual',
    },
    {
      svgName: 'channel-love',
      text: '公益',
      href: 'https://love.bilibili.com/',
    },
    {
      svgName: 'channel-gongkaike',
      text: '公开课',
      href: 'https://www.bilibili.com/mooc',
    },
  ],
  [
    {
      svgName: 'channel-read',
      text: '专栏',
      href: 'https://www.bilibili.com/read/home',
    },
    {
      svgName: 'channel-live',
      text: '直播',
      href: 'https://live.bilibili.com/',
    },
    {
      svgName: 'channel-activity',
      text: '活动',
      href: 'https://www.bilibili.com/blackboard/activity-list.html',
    },
    {
      svgName: 'channel-zhishi',
      text: '课堂',
      href: 'https://www.bilibili.com/cheese/',
    },
    {
      svgName: 'channel-blackroom',
      text: '社区中心',
      href: 'https://www.bilibili.com/blackboard/activity-5zJxM3spoS.html',
    },
    {
      svgName: 'channel-musicplus',
      text: '新歌热榜',
      href: 'https://www.bilibili.com/v/musicplus/',
    },
  ],
];
</script>

<template>
  <div class="card-category">
    <div class="card-category__col" v-for="menuList in menuCollection">
      <NavListItem
        class="card-category__item"
        v-for="menuItem in menuList"
        :href="menuItem.href">
        <SvgIcon class="icon" :name="menuItem.svgName" />
        <span class="text">{{ menuItem.text }}</span>
      </NavListItem>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-category {
  padding: 16px 0;
  display: flex;
  &__col {
    padding: 0 16px;
    border-right: 1px solid var(--line_regular);
  }
  &__col:nth-last-child(1) {
    border-right: none;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 119px;
    margin: 3px 0;
    .icon {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
    .text {
      font-size: var(--fs2);
      color: var(--text1);
    }
  }
}
</style>
