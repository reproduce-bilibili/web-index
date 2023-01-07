<script lang="ts" setup>
import Icons from './fragments/Icons/index.vue';
import ItemLeft from './fragments/ItemsLeft/index.vue';
import ItemRight from './fragments/ItemsRight/index.vue';
import Fixed from './Fixed.vue';
import { useIntersectionObserver } from '@/composables/observer';
import { ref, watchEffect } from 'vue';
import { useExpend } from '@/composables/expend';

const { targetRef, entry } = useIntersectionObserver();
const showFixed = ref(false);
watchEffect(() => {
  if (!entry.value) showFixed.value = false;
  else {
    showFixed.value = entry.value.intersectionRatio === 0;
  }
});

const {
  target: channelFixedRef,
  targetStyle: channelFixedStyle,
  expended: channelFixedExpended,
  setExpended,
} = useExpend({
  maxSize: 56,
  expendMaxSize: 150,
});
</script>

<template>
  <div class="b-channel" ref="targetRef">
    <Icons class="b-channel__icons" />
    <ItemLeft class="b-channel__items-left" />
    <ItemRight class="b-channel__items-right" />
  </div>
  <div
    v-show="showFixed"
    class="b-channel--fixed"
    ref="channelFixedRef"
    :style="channelFixedStyle"
    @mouseenter="() => setExpended(true)"
    @mouseleave="() => setExpended(false)">
    <Fixed :expended="channelFixedExpended" />
  </div>
</template>

<style lang="scss">
@use '@/style/break-point' as * with($key: channel);
.b-channel {
  display: flex;
  padding: 0 var(--layout_padding);
  height: 120px;
  align-items: center;
  max-width: var(--layout_max_width);
  margin: 0 auto;

  @include mq($from: xl) {
    height: 130px;
  }

  &__icons {
    margin-right: 30px;
  }

  &__items-left {
    flex-grow: 1;
  }

  &__items-right {
    margin-left: 30px;
    border-left: 1px solid var(--line_regular);
  }

  &__icons,
  &__items-left,
  &__items-right {
    flex-shrink: 0;
  }
}

@keyframes fixed-channel-fade-out {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.b-channel--fixed {
  overflow: hidden;
  transition: max-height 0.2s;
  animation: fixed-channel-fade-out 0.2s forwards;
  position: fixed;
  top: var(--h-header);
  width: 100%;
  margin: 0 auto;
  min-width: 1100px;
  max-width: var(--layout_content_max_width);
  background-color: var(--bg1_float);
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
  display: flex;
  justify-content: center;
  padding: 14px var(--layout_padding);
}
</style>
