<script lang="ts" setup>
import BadgeWrapper from '@/components/Badge/BadgeWrapper.vue';
</script>

<template>
  <BadgeWrapper :offset="{ left: '26px', top: '-6px' }" v-bind="$attrs">
    <slot />
  </BadgeWrapper>
</template>
