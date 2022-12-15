<script lang="ts" setup>
import { PropType } from 'vue';
import Menu from '@/components/Menu/index.vue'
import MenuItem from './MenuItem.vue';

defineProps({
  menuItemList: {
    type: Array as PropType<{ count?: number; title: string }[]>,
  },
});
</script>

<template>
  <Menu class="msg-menu">
    <MenuItem class="msg-menu__item" v-for="item in menuItemList" :key="item.title" v-bind="item" :title="undefined">
      {{ item.title }}
    </MenuItem>
  </Menu>
</template>

<style lang="scss" scoped>
.msg-menu {
  padding: 12px 0;
  overflow: hidden;
  width: 142px;
}
</style>
