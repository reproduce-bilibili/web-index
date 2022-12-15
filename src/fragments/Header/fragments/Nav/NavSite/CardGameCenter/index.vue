<script lang="ts" setup>
import { computed, reactive } from 'vue';
import useI18nLocal from '@/hooks/useI18nLocal';
import i18nOptions from '@/fragments/Header/i18n';

import GameBanner from './GameBanner.vue';
import GameList, { ItemListGame } from './GameList.vue';
import GamePanel, { ItemPanelGame } from './GamePanel.vue';

const { t } = useI18nLocal(i18nOptions);

const dataBanner = computed(() => ({
  src: '/assets/card_game_center/banner.webp',
  href: 'https://game.bilibili.com/fgo/Oberon',
  title: t('fgoTitle'),
}));

const panelList = computed<ItemPanelGame[]>(
  () => [
    {
      title: t('azurLane'),
      src: '/assets/card_game_center/panel_1.webp',
      href: 'https://game.bilibili.com/blhx/mfzn/h5',
    },
    {
      title: t('guardianTales'),
      src: '/assets/card_game_center/panel_2.webp',
      href: 'https://game.bilibili.com/gt/kaluoer',
    },
    {
      title: t('timeHunter'),
      src: '/assets/card_game_center/panel_3.webp',
      href: 'https://game.bilibili.com/sklr3',
    },
  ],
);

const gameList = computed<ItemListGame[]>(() => [
  {
    title: t('inTheNameOfShining'),
    href: 'https://www.biligame.com/detail/?id=107681',
    src: '/assets/card_game_center/list_1.webp',
  },
  {
    title: t('huntingMoment'),
    href: 'https://game.bilibili.com/slsk',
    src: '/assets/card_game_center/list_2.webp',
  },
  {
    title: t('collapseStarDomeRailway'),
    href: 'https://www.biligame.com/detail/?id=107800',
    src: '/assets/card_game_center/list_3.webp',
  },
  {
    title: t('laiGuMiXin'),
    href: 'https://www.biligame.com/detail/?id=106486',
    src: '/assets/card_game_center/list_4.webp',
  },
  {
    title: t('absoluteZero'),
    href: 'https://jq0.biligame.com/yy/h5',
    src: '/assets/card_game_center/list_5.webp',
  },
  {
    title: t('codeBaijia'),
    href: 'https://game.bilibili.com/dhbj',
    src: '/assets/card_game_center/list_6.webp',
  },
  {
    title: t('siLuDe'),
    href: 'https://www.biligame.com/detail/?id=104284',
    src: '/assets/card_game_center/list_7.webp',
  },
]);

const gameFloatImgData = reactive<{ show: boolean; src?: string }>({
  show: false,
  src: undefined,
});
const handlerHoverItem = (hover: boolean, { src }: { src?: string }) => {
  gameFloatImgData.show = hover;
  gameFloatImgData.src = src;
};
</script>

<template>
  <div class="card-game-center">
    <div class="card-game-center-left">
      <GameBanner v-bind="dataBanner" />
      <GamePanel class="card-game-center-left__panel" :panel-list="panelList" />
    </div>
    <div class="card-game-center-right">
      <div class="card-game-center-right__title">{{ t('newGamePreview') }}</div>
      <GameList :game-list="gameList" @hover:item="handlerHoverItem" />
      <div
        v-show="gameFloatImgData.show"
        class="card-game-center-right__list-img"
        v-img="gameFloatImgData.src"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-game-center {
  display: flex;
  padding: var(--m6);
  &-right,
  &-left {
    flex-shrink: 0;
    height: 255px;
  }
  &-left {
    width: 250px;
    padding-right: var(--m6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    border-right: 0.5px solid var(--line_regular);
    &__panel {
      width: 100%;
      margin-top: var(--m5);
    }
  }
  &-right {
    position: relative;
    padding-left: var(--m6);
    &__title {
      margin-bottom: var(--m1);
      margin-left: var(--m0);
      font-size: var(--fs5);
      line-height: 28px;
    }
    &__list-img {
      width: 200px;
      height: 200px;
      position: absolute;
      top: 44px;
      right: -195px;
      border-radius: var(--radius2);
      overflow: hidden;
    }
  }
}
</style>
