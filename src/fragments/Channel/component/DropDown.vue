<script lang="ts" setup>
import { PropType } from 'vue';

defineProps({
  direction: {
    type: String as PropType<'top' | 'bottom'>,
    default: 'top',
  },
});
</script>

<template>
  <VDropdown
    class="channel-dropdown"
    :theme="`header-card-${direction}`"
    container=".b-channel"
    v-bind="$attrs">
    <template v-for="(slot, name) in $slots" v-slot:[name]>
      <slot :name="name" />
    </template>
  </VDropdown>
</template>

<style lang="scss" scoped>
.channel-dropdown {
  position: relative;
}
</style>
