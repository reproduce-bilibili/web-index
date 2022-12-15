<script lang="ts" setup>
import ButtonNavBase from '@/components/Button/ButtonNavBase.vue';
import clsx from 'clsx';
import { computed } from 'vue';
const props = defineProps({
  jump: {
    type: Boolean,
    default: true,
  },
});
const cls = computed(() => clsx(['entry--default', { jump: props.jump }]));
</script>

<template>
  <ButtonNavBase :class="cls"> <slot /><slot name="popover" /></ButtonNavBase>
</template>

<style lang="scss" scoped>
.entry--default {
  &.jump:hover {
    animation: jump 0.3s;
  }
  // height: 100%;
}
</style>
