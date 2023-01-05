<script lang="ts" setup>
import Icons from './fragments/Icons/index.vue';
import ItemLeft from './fragments/ItemsLeft/index.vue';
import ItemRight from './fragments/ItemsRight/index.vue';
</script>

<template>
  <div class="b-channel">
    <Icons class="b-channel__icons" />
    <ItemLeft class="b-channel__items-left" />
    <ItemRight class="b-channel__items-right" />
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

  &__icons, &__items-left, &__items-right {
    flex-shrink: 0;
  }
}
</style>
