<script lang="ts" setup>
import Graph from '@/components/Graph/index.vue';
import { hasLetters } from '@/utils/helpers';
import { computed } from 'vue';
import { makeChannelItemProps } from '../../composables/channelItem';

import type { CSSProperties } from 'vue';

const props = defineProps({
  ...makeChannelItemProps(),
});

const style = computed<CSSProperties>(() => ({
  letterSpacing:
    hasLetters(props.text || '') || props.text.length > 3 ? '0px' : '2px',
}));
</script>

<template>
  <Graph
    class="channel-item--fixed"
    :style="style"
    :href="href"
    :target="target">
    <slot>
      {{ text }}
    </slot>
  </Graph>
</template>

<style lang="scss" scoped>
@use '@/style/break-point' as * with($key: channel);
.channel-item--fixed {
  display: inline-block;
  height: 28px;
  line-height: 28px;
  border: 1px solid var(--line_light);
  border-radius: 6px;
  text-align: center;
  color: var(--text2);
  background-color: var(--graph_bg_thin);
  transition: background-color 0.2s;
  font-size: var(--fs2);
  @include mq($until: md) {
    font-size: var(--fs1);
  }
}
.channel-item--fixed:hover {
  background-color: var(--graph_bg_thick);
}
</style>
