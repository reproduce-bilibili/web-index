<script lang="ts" setup>
import { useResizeObserver } from '@/composables/observer';
import { computed } from 'vue';
import HotItem from './components/HotItem.vue';
import { hotTagMap } from './constant';

defineEmits<{
  (e: 'clickItem', text: string): void;
}>();

const dataList: {
  type?: keyof typeof hotTagMap;
  text: string;
}[] = [
  {
    type: 'hot',
    text: '梅西想以世界冠军身份再踢球',
  },
  {
    type: 'new',
    text: '马克龙称姆巴佩让法国骄傲',
  },
  {
    type: 'live',
    text: '阿根廷球迷彻夜狂欢',
  },
  {
    type: 'new',
    text: '阿根廷夺冠约3.6亿奖金到账',
  },
  {
    text: '男子确诊后舌头牙齿全变黑',
  },
  {
    type: 'new',
    text: '多位明星发文为梅西庆祝',
  },
  {
    text: '得了新冠嗓子重回变声期',
  },
  {
    text: '沙特是本届唯一战胜冠军的球队',
  },
  {
    text: '工作细胞之杀疯的免疫系统',
  },
  {
    type: 'meme',
    text: '这一脚踢走了整个发烧',
  },
];

const { targetRef: contentRef, entry } = useResizeObserver();

const showDoubleContent = computed(
  () =>
    (entry.value?.borderBoxSize[0].inlineSize || Number.MAX_SAFE_INTEGER) > 440,
);
</script>

<template>
  <div class="search-hot">
    <div class="search-hot-title">bilibili热搜</div>
    <div class="search-hot-content" ref="contentRef">
      <div v-if="showDoubleContent" class="search-hot-content--double">
        <div class="search-hot-content--double__col">
          <HotItem
            class="search-hot-content__item"
            v-for="(data, i) in dataList.slice(0, 5)"
            v-bind="data"
            :index="i + 1"
            @click="$emit('clickItem', data.text)" />
        </div>
        <div class="search-hot-content--double__col">
          <HotItem
            class="search-hot-content__item"
            v-for="(data, i) in dataList.slice(5, 10)"
            v-bind="data"
            :index="i + 6"
            @click="$emit('clickItem', data.text)" />
        </div>
      </div>
      <div v-else class="search-hot-content--stack">
        <HotItem
          class="search-hot-content__item"
          v-for="(data, i) in dataList"
          v-bind="data"
          :index="i + 1"
          @click="$emit('clickItem', data.text)" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-hot {
  &-title {
    font-size: var(--fs3);
    color: var(--text1);
    padding: 0 16px;
    height: 24px;
    line-height: 24px;
  }
  &-content {
    &--double {
      width: 100%;
      display: flex;
      &__col:nth-child(1) {
        margin-right: 10px;
      }
      &__col {
        flex-grow: 1;
        flex-basis: 0;
        width: 0;
      }
    }
    &__item {
      // flex-grow: 1;
      // flex-basis: 0;
    }
  }
}
</style>
