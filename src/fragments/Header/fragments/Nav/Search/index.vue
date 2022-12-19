<script lang="ts" setup>
import IconSearch from '@/components/Icon/Search.vue';
import IconClose from '@/components/Icon/Close.vue';
import History from './History.vue';
import Hot from './Hot.vue';
import { useFocus } from '@/composables/focus';
import { computed, ref } from 'vue';

const isFocus = ref(false);
const {
  target,
  isFocus: isActive,
  focus: focusInput,
} = useFocus({
  cb: (ev, type) => type === 'focus' && (isFocus.value = true),
});

const placeholder = 'NoraH1to';
const inputContent = ref('');
const searchContent = computed(() => inputContent.value || placeholder);
const historyTagList = ref<string[]>([
  'Paper Cut',
  'Instant Crush',
  'Blew',
  'ROSE NANA',
  'The Dark Side of the Moon',
  'Sing for Absolution',
]);

const hasInput = computed(() => !!inputContent.value?.length);

const clearInput = () => (inputContent.value = '');
const search = (searchContent: string) => {
  !historyTagList.value.includes(searchContent) &&
    historyTagList.value.push(searchContent);
  window.open(
    `https://search.bilibili.com/all?keyword=${searchContent}`,
    '_blank',
  );
};

const deleteHistoryTag = (tag: string) =>
  historyTagList.value.splice(historyTagList.value.indexOf(tag), 1);
const clearHistoryTag = () => (historyTagList.value.length = 0);
const handleHistoryTagClick = (tag: string) => {
  inputContent.value = tag;
  focusInput();
  search(tag);
};
const handleHotItemClick = (text: string) => {
  inputContent.value = text;
  focusInput();
  search(text);
};
</script>

<template>
  <div
    :class="['nav-search-container', { 'is-focus': isFocus }]"
    v-click-outside="() => (isFocus = false)">
    <form
      class="nav-search-form"
      @keydown.enter.prevent="search(searchContent)">
      <div class="nav-search-form__content">
        <input
          :class="[
            'nav-search-form__input',
            { 'nav-search-form__input--active': isActive },
          ]"
          ref="target"
          :placeholder="placeholder"
          v-model="inputContent" />
        <IconClose
          v-show="hasInput"
          class="nav-search-form__clear"
          @click="clearInput" />
      </div>
      <div class="nav-search-form__search" @click="search(searchContent)">
        <IconSearch />
      </div>
    </form>
    <div v-show="isFocus" class="nav-search-expend-content">
      <History
        :tag-list="historyTagList"
        @clear="clearHistoryTag"
        @delete="deleteHistoryTag"
        @click-tag="handleHistoryTagClick" />
      <Hot @click-item="handleHotItemClick" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/style/mixins.scss' as *;

.nav-search-container {
  $height: 40px;
  $border-size: 1px;
  height: $height;
  position: relative;
  @include flex-center();
  align-items: stretch;
  .nav-search-form {
    @include flex-center();
    flex-grow: 1;
    padding: 0 4px;
    border-radius: 8px;
    line-height: $height - 2 * $border-size;
    border: 1px solid var(--line_regular);
    background-color: var(--graph_bg_regular);
    transition: background-color 0.3s;
    &__content {
      @include flex-center();
      justify-content: unset;
      flex-grow: 1;
      height: 32px;
      width: 100%;
      padding: 0 8px;
      border-radius: 6px;
      border: 2px solid transparent;
    }
    &__input {
      flex-grow: 1;
      outline: none;
      border: none;
      background-color: transparent;
      height: 20px;
      line-height: 20px;
      font-size: var(--fs2);
      color: var(--text2);
    }
    &__input--active {
      color: var(--text1);
    }
    &__clear {
      cursor: pointer;
      color: var(--graph_weak);
    }
    &__clear:hover {
      color: var(--graph_icon);
    }
    &__search {
      @include clickable-item();
      @include flex-center();
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      border-radius: 6px;
      color: var(--text1);
      margin-left: 10px;
      cursor: pointer;
    }
  }
  .nav-search-form:hover {
    background-color: #fff;
  }
  .nav-search-expend-content {
    width: 100%;
    padding: 13px 0 16px;
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    border: 1px solid var(--line_regular);
    border-top: 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: #fff;
  }
}
.nav-search-container.is-focus {
  .nav-search-form {
    background-color: #fff;
    border-bottom: 0;
    border-radius: 8px 8px 0px 0px;
    &__content {
      background-color: var(--graph_bg_thick);
    }
  }
}
</style>
