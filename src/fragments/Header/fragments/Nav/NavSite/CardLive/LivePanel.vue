<script lang="ts" setup>
import ButtonPanelDefault from '@/fragments/Header/components/ButtonPanel/ButtonPanelDefault.vue';
import ButtonPanelTitle from '@/fragments/Header/components/ButtonPanel/ButtonPanelTitle.vue';
export type ItemPanelLive = Pick<LinkProps, 'title' | 'src' | 'href'>;

defineProps<{ panelList: ItemPanelLive[] }>();
</script>

<template>
  <div class="card-live-panel">
    <div class="card-live-panel__list">
      <ButtonPanelDefault
        v-for="panel in panelList"
        :key="panel.title"
        class="card-live-panel__item"
        v-bind="panel">
        <template #img>
          <div v-img="panel.src" class="card-live-panel__item__img"></div>
        </template>
        <template #title>
          <ButtonPanelTitle
            class="card-live-panel__item__title"
            :title="panel.title" />
        </template>
      </ButtonPanelDefault>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$img-size: 68px;
.card-live-panel {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, $img-size);
    grid-template-rows: repeat(2, 91px);
    row-gap: 16px;
    column-gap: 16px;
  }
  &__item {
    width: $img-size;
    text-align: center;
    &__img {
      width: $img-size;
      height: $img-size;
      position: relative;
      border-radius: 50%;
      overflow: hidden;
      &:hover::after {
        opacity: 0.3;
      }
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0;
        transition: opacity 0.2s;
      }
    }
    &__title {
      margin-top: 6px;
      -webkit-line-clamp: 1;
    }
  }
}
</style>
