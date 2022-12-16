<script lang="ts" setup>
import { useScroll } from '@/composables/scroll';
import { PropType } from 'vue';

const props = defineProps({
  onToBottom: Function as PropType<() => any>,
  onToTop: Function as PropType<() => any>,
});

const { target: container } = useScroll({
  onBottom: props.onToBottom,
  onTop: props.onToTop,
});
</script>

<template>
  <div class="scroll-container" ref="container"><slot /></div>
</template>

<style lang="scss" scoped>
.scroll-container {
  overflow-y: scroll;
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: var(--text4);
  }
}
</style>
