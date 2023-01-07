<script lang="ts" setup>
import FixedItems from './fragments/FixedItems/index.vue';
import FixedIcons from './fragments/FixedIcons/index.vue';
import ChannelItem from './fragments/FixedItems/ChannelItem.vue';
import Arrow from '@/components/Icon/Arrow.vue';

defineProps({
  expended: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="b-channel-fixed">
    <FixedIcons class="b-channel-fixed__icon-items" />
    <div class="b-channel-fixed__split"></div>
    <FixedItems class="b-channel-fixed__channel-items" />
    <ChannelItem
      :class="[
        'b-channel-fixed__arrow',
        { 'b-channel-fixed__arrow--expended': expended },
      ]">
      <Arrow class="icon" />
    </ChannelItem>
  </div>
</template>

<style lang="scss" scoped>
.b-channel-fixed {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  &__split {
    height: 14px;
    width: 1px;
    margin-right: 10px;
    background-color: var(--line_regular);
  }

  &__icon-items {
    align-self: flex-start;
    flex-shrink: 0;
  }

  &__channel-items {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    align-self: stretch;
  }

  &__arrow {
    position: absolute;
    width: 28px;
    right: calc((-28px - 10px));
    top: 0;
    cursor: pointer;
    background-color: #fff;
    border: none;
    color: var(--text1);
    .icon {
      transform: rotate(180deg);
      transition: transform 0.2s;
    }
  }
  &__arrow--expended {
    .icon {
      transform: rotate(0);
    }
  }
}
</style>
