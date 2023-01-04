<script lang="ts" setup>
import EntryHome from './EntryHome.vue';
import EntryAnime from './EntryAnime.vue';
import EntryLive from './EntryLive.vue';
import EntryGameCenter from './EntryGameCenter.vue';
import EntryVipShop from './EntryVipShop.vue';
import EntryComic from './EntryManga.vue';
import EntryMatch from './EntryMatch.vue';
import EntryBls from './EntryBls.vue';
import EntryDownloadClient from './EntryDownloadClient.vue';
import EntryHomeWithMenu from './EntryHomeWithMenu.vue';
import { useNavState } from '@/fragments/Header/composables/nav';

const navState = useNavState();
</script>

<template>
  <ul :class="['nav__site', { 'nav__site--fixed': navState?.fixed }]">
    <li v-show="navState?.fixed" class="nav__site__item logo">
      <EntryHomeWithMenu />
    </li>
    <li v-show="!navState?.fixed" class="nav__site__item">
      <EntryHome />
    </li>
    <li class="nav__site__item">
      <EntryAnime />
    </li>
    <li class="nav__site__item">
      <EntryLive />
    </li>
    <li class="nav__site__item">
      <EntryGameCenter />
    </li>
    <li class="nav__site__item">
      <EntryVipShop />
    </li>
    <li class="nav__site__item">
      <EntryComic />
    </li>
    <li class="nav__site__item">
      <EntryMatch />
    </li>
    <li class="nav__site__item bls">
      <EntryBls />
    </li>
    <li class="nav__site__item download-client">
      <EntryDownloadClient />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use '@/style/break-point' as * with($key: nav);
.nav__site {
  display: flex;
  &,
  & :deep(.entry--default) {
    height: var(--h-header);
    line-height: var(--h-header);
  }
  overflow: hidden;
  color: inherit;
  font-size: var(--fs2);
  .nav__site__item {
    list-style-type: none;
    margin-right: var(--m6);
    flex-shrink: 0;
  }
}

@include mq($until: lg) {
  .nav__site {
    .nav__site__item {
      margin-right: 10px;
    }
  }
}

@include mq($until: md) {
  .nav__site {
    .nav__site__item.bls {
      display: none;
    }
  }
}
@include mq($until: md) {
  .nav__site--fixed {
    .nav__site__item.download-client {
      display: none;
    }
  }
}
</style>
