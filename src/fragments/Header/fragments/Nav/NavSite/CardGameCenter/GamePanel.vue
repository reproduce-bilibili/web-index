<script lang="ts" setup>
import ButtonPanelDefault from '@/fragments/Header/components/ButtonPanel/ButtonPanelDefault.vue';

export type ItemPanelGame = Pick<LinkProps, 'title' | 'src' | 'href'>;

defineProps<{ panelList: ItemPanelGame[] }>();
</script>

<template>
  <div class="card-game-center-panel">
    <ButtonPanelDefault
      v-for="panel in panelList"
      :key="panel.title"
      class="card-game-center-panel__item"
      size="md"
      v-bind="panel" />
  </div>
</template>

<style lang="scss" scoped>
.card-game-center-panel {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  &__item {
    width: 66px;
    -webkit-line-clamp: 2;
  }
}
</style>
