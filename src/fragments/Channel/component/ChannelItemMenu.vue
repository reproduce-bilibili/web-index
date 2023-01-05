<script lang="ts" setup>
import { computed, PropType } from 'vue';

import type { LinkProps } from '@/composables/link';
import NavListItem from '@/components/NavList/NavListItem.vue';
import { splitArrByCount } from '@/utils/helpers';

const props = defineProps({
  items: {
    type: Array as PropType<
      Array<
        {
          text: string;
        } & LinkProps
      >
    >,
    default: () => [],
  },
  breakLineCount: {
    type: Number,
    default: 4,
  },
});

const _items = computed(() =>
  splitArrByCount(props.items, props.breakLineCount),
);
</script>

<template>
  <div class="channel-item-menu">
    <div class="channel-item-menu__group" v-for="itemGroup in _items">
      <NavListItem
        class="channel-item-menu__item"
        v-for="item in itemGroup"
        size="sm"
        :href="item.href"
        :target="item.target">
        {{ item.text }}
      </NavListItem>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.channel-item-menu {
  display: flex;
  padding: 8px 16px;
  &__group {
    margin-right: 8px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
  &__group:nth-last-child(1) {
    margin-right: 0;
  }
  &__item {
    color: var(--text1);
  }
}
</style>
