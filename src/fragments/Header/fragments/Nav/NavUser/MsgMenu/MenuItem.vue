<script lang="ts" setup>
import MenuItem from '@/components/Menu/MenuItem.vue';
import { computed } from 'vue';
const props = defineProps({
  count: Number,
});
const _count = computed(() =>
  props.count ? (props.count > 99 ? '99+' : props.count) : undefined,
);
</script>

<template>
  <MenuItem class="msg-menu-item" size="md">
    <slot />
    <span v-if="_count" class="msg-menu-item__number">
      {{ _count }}
    </span>
  </MenuItem>
</template>

<style lang="scss" scoped>
.msg-menu-item {
  padding: 10px 0 10px 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__number {
    margin-right: 16px;
    background-color: #fa5a57;
    color: #fff;
    line-height: 16px;
    padding: 0 5px;
    border-radius: var(--radius2);
    font-size: var(--fs0);
  }
}
</style>
