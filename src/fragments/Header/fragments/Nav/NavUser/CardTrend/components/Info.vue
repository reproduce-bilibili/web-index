<script lang="ts" setup>
import Graph from '@/components/Graph/index.vue';
import { computed } from 'vue';
import { makeUserInfoProps } from '@/composables/userInfo';
import { makeItemTypeProps } from '../../../composables/ItemType';
import { makeImgProps } from '@/composables/img';
import { makeInfoProps } from '../../../composables/info';

const props = defineProps({
  ...makeUserInfoProps(),
  ...makeItemTypeProps(),
  ...makeImgProps(),
  ...makeInfoProps(),
});

const nameLink = computed(() => {
  if (['video', 'read'].includes(props.type))
    return `https://space.bilibili.com/${props.userInfo.uid}/dynamic`;
  else return undefined;
});
</script>

<template>
  <div class="tread-info">
    <div class="name">
      <Graph class="name__text" :title="name" :href="nameLink">{{
        name
      }}</Graph>
    </div>
    <div class="title">{{ title }}</div>
    <div class="time">{{ date }}</div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/style/mixins.scss' as *;
.tread-info {
  // display: flex;
  .name {
    margin-bottom: 4px;
    &__text {
      @include line-clamp(1);
      font-size: var(--fs1);
      color: var(--text2);
    }
  }
  .title {
    font-size: var(--fs2);
    color: var(--text1);
    @include line-clamp(3);
    margin-bottom: 2px;
  }
  .time {
    font-size: var(--fs1);
    color: var(--text3);
  }
}
</style>
