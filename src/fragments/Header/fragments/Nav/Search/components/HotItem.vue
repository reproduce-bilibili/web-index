<script lang="ts" setup>
import { PropType } from 'vue';
import { hotTagMap } from '../constant';

defineProps({
  index: {
    type: Number,
    required: true,
  },
  text: String,
  type: String as PropType<keyof typeof hotTagMap>,
});
</script>

<template>
  <div class="search-hot-item">
    <div :class="['search-hot-item__index', { top: index <= 3 }]">
      {{ index }}
    </div>
    <div class="search-hot-item__content">
      <slot>{{ text }}</slot>
    </div>
    <div
      v-if="type"
      class="search-hot-item__tag"
      v-img="`${hotTagMap[type]}@28h`"></div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/style/mixins.scss' as *;
.search-hot-item:hover, .search-hot-item:focus {
  background-color: var(--graph_bg_thick);
}
.search-hot-item {
  height: 38px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: var(--fs2);
  cursor: pointer;

  &__index,
  &__tag {
    flex-shrink: 0;
  }

  &__index {
    margin-right: 7px;
    min-width: 15px;
    color: var(--text3);
  }
  &__index.top {
    color: var(--text1);
  }

  &__tag {
    margin-right: 16px;
    height: 14px;
  }

  &__content {
    margin-right: 6px;
    color: var(--text1);
    @include line-clamp(1);
  }
}
</style>
