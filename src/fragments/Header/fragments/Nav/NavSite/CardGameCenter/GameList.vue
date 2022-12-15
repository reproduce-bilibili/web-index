<script lang="ts" setup>
import NavList from '@/components/NavList/index.vue';
import NavListItem from '@/components/NavList/NavListItem.vue';

export type ItemListGame = Pick<LinkProps, 'title' | 'href' | 'src'>;

defineEmits<{
  (e: 'hover:item', hover: boolean, item: ItemListGame): void;
}>();

defineProps<{ gameList: ItemListGame[] }>();
</script>

<template>
  <NavList class="card-game-center-game-list">
    <NavListItem
      v-for="game in gameList"
      class="card-game-center-game-list__item"
      :key="game.title"
      v-bind="game"
      @mouseenter="$emit('hover:item', true, game)"
      @mouseleave="$emit('hover:item', false, game)">
      {{ game.title }}
    </NavListItem>
  </NavList>
</template>

<style lang="scss" scoped>
.card-game-center-game-list {
  &__item {
    width: 120px;
  }
}
</style>
