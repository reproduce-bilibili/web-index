<script lang="ts">
import { makeSizeProps, useSize } from '@/composables/size';
import { genericComponent } from '@/utils/defineComponent';

export default genericComponent()({
  props: {
    title: {
      type: String,
      default: '',
    },
    ...makeSizeProps(),
  },
  setup(props, { attrs }) {
    const { cls } = useSize(props, attrs, {
      cls: ['button-panel__title'],
    });
    return {
      cls,
    };
  },
});
</script>

<template>
  <div :class="cls">
    {{ title }}
  </div>
</template>

<style lang="scss" scoped>
@use '@/style/mixins.scss' as *;
.button-panel__title {
  @include line-clamp();
  word-break: break-word;
  -webkit-line-clamp: inherit;
  &--sm {
    margin-top: 6px;
    font-size: var(--fs0);
  }
  &--md {
    margin-top: 8px;
    font-size: var(--fs1);
  }
}
</style>
