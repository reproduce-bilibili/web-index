<script lang="ts" setup>
import { computed, PropType } from 'vue';
import Tag from './components/Tag.vue';
import IconFold from '@/components/Icon/Fold.vue';
import { useExpend } from '@/composables/expend';

const props = defineProps({
  tagList: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
});
defineEmits<{
  (e: 'delete', tag: string): void;
  (e: 'clear'): void;
  (e: 'clickTag', tag: string): void;
}>();

const {
  targetStyle,
  target: contentRef,
  expended,
  toggle,
  needExpend,
} = useExpend({
  maxSize: 92,
  source: () => props.tagList,
});

const expendBtnText = computed(() => (expended.value ? '收起' : '展开更多'));
</script>

<template>
  <div class="search-history" v-show="tagList.length">
    <div class="search-history-header">
      <div class="search-history-header__title">搜索历史</div>
      <div class="search-history-header__action" @click="$emit('clear')">
        清空
      </div>
    </div>
    <div class="search-history-content" :style="targetStyle" ref="contentRef">
      <Tag
        class="search-history-content__tag"
        delete-able
        v-for="tag in tagList"
        :text="tag"
        @delete="$emit('delete', tag)"
        @click="$emit('clickTag', tag)" />
    </div>
    <div v-show="needExpend" class="search-history-expend">
      <div class="search-history-expend__content" @click="toggle">
        {{ expendBtnText
        }}<IconFold :class="['icon', { 'icon--expended': expended }]" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/style/mixins.scss' as *;
.search-history {
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    &__title {
      color: var(--text1);
      font-size: var(--fs3);
      height: 24px;
      line-height: 24px;
    }
    &__action {
      color: var(--text3);
      font-size: var(--fs0);
      height: 15px;
      line-height: 15px;
      cursor: pointer;
    }
    &__action:hover {
      color: var(--brand_blue);
    }
  }
  &-content {
    display: flex;
    flex-wrap: wrap;
    padding: 0 16px;
    padding-top: 10px;
    overflow: hidden;
    margin-right: -10px;
    margin-bottom: 4px;
    &__tag {
      max-width: 96px;
      cursor: pointer;
      margin-right: 10px;
      margin-bottom: 10px;
      flex-shrink: 0;
    }
  }
  &-expend {
    @include flex-center();
    margin-bottom: 14px;
    &__content {
      @include flex-center();
      cursor: pointer;
      font-size: var(--fs0);
      color: var(--text3);
      .icon {
        width: 12px;
        height: 12px;
        margin-left: 2px;
      }
      .icon--expended {
        transform: rotate(180deg);
      }
    }
    &__content:hover {
      color: var(--brand_blue);
    }
  }
}
</style>
