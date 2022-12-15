<script lang="ts" setup>
import { computed } from 'vue';
import MangaList from './MangaList.vue';
import MangaPanelList from './MangaPanelList.vue';

const panelList = computed(() => [
  {
    href: 'https://manga.bilibili.com/detail/mc27661?refer_from=bili_main_nav&spm_id_from=333.1007.0.0',
    title: '仙王的日常生活',
    src: '/i0.hdslb.com/bfs/manga-static/f8d219b09f4d89bf80fb7fef8264bf365a9352a0.jpg@272w',
  },
  {
    href: 'https://manga.bilibili.com/detail/mc26009?refer_from=bili_main_nav&spm_id_from=333.1007.0.0',
    title: '辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',
    src: '/i0.hdslb.com/bfs/manga-static/7fe349fd5a3d9522546e1582ad03604e82b1ff41.png@272w',
  },
  {
    href: 'https://manga.bilibili.com/detail/mc26769?refer_from=bili_main_nav&spm_id_from=333.1007.0.0',
    title: '天宫赐福',
    src: '/i0.hdslb.com/bfs/manga-static/34fa65e67d3f8eb7bd38020c316b03ae4718ccb7.png@272w',
  },
  {
    href: 'https://manga.bilibili.com/detail/mc26566?refer_from=bili_main_nav&spm_id_from=333.1007.0.0',
    title: '刀剑神域 Alicization篇',
    src: '/i0.hdslb.com/bfs/manga-static/86a3e7b7511587ef14372203db5b852ee30ee182.jpg@272w',
  },
]);
const list = computed(() => [
  {
    href: 'https://manga.bilibili.com/detail/mc25969?refer_from=bili_main_nav&spm_id_from=333.1007.0.0',
    title: '碧蓝之海',
    src: '/i0.hdslb.com/bfs/manga-static/1572f58dd448a1361350eb4079472d361a292181.jpg@320w_426h',
  },
  {
    href: 'https://manga.bilibili.com/detail/mc27189?refer_from=bili_main_nav&spm_id_from=333.1007.0.0',
    title: '入间同学入魔了！',
    src: '/i0.hdslb.com/bfs/manga-static/29bcfdcfa184e908b6ab6e0367c853a7595f8f1a.jpg@320w_426h',
  },
  {
    href: 'https://manga.bilibili.com/detail/mc28201?refer_from=bili_main_nav&spm_id_from=333.1007.0.0',
    title: '间谍过家家',
    src: '/i0.hdslb.com/bfs/manga-static/c62668e300b5212fe5504f6fa9b4b5c630f8ebeb.jpg@320w_426h',
  },
  {
    href: 'https://manga.bilibili.com/detail/mc24742?refer_from=bili_main_nav&spm_id_from=333.1007.0.0',
    title: '航海王',
    src: '/i0.hdslb.com/bfs/manga-static/ac575cdf576bd5eb7775a5371d44e0809235bf20.jpg@320w_426h',
  },
  {
    href: 'https://manga.bilibili.com/detail/mc25501?refer_from=bili_main_nav&spm_id_from=333.1007.0.0',
    title: '步天歌',
    src: '/i0.hdslb.com/bfs/manga-static/d57a4bc43398a15b6369486af4398030110ca3b8.jpg@320w_426h',
  },
  {
    href: 'https://manga.bilibili.com/detail/mc30430?refer_from=bili_main_nav&spm_id_from=333.1007.0.0',
    title: '我的假女友正全力防御她们的进攻',
    src: '/i0.hdslb.com/bfs/manga-static/e851c083225a4b8aa2cace1164080d148683b47d.jpg@320w_426h',
  },
]);
</script>

<template>
  <div class="card-live">
    <div class="card-live-left">
      <MangaPanelList :panel-list="panelList" />
    </div>
    <div class="card-live-right">
      <MangaList :list="list" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-live {
  display: flex;
  flex-shrink: 0;
  padding: 20px;
  &-left {
    padding-right: 20px;
    border-right: 0.5px solid var(--line_regular);
  }
  &-right {
    padding-left: 20px;
  }
}
</style>
