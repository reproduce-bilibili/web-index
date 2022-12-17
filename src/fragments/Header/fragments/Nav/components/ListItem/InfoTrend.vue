<script lang="ts" setup>
import Graph from '@/components/Graph/index.vue';
import { computed } from 'vue';
import { makeUserInfoPropsSimple } from '@/composables/userInfo';
import { makeItemTypeProps } from '@/composables/itemInfo';
import { makeInfoPropsSimple } from '@/composables/itemInfo';

const props = defineProps({
  ...makeUserInfoPropsSimple(),
  ...makeItemTypeProps(),
  ...makeInfoPropsSimple(),
});

const nameLink = computed(() => {
  if (['video', 'read'].includes(props.type))
    return `https://space.bilibili.com/${props.userInfo?.uid}/dynamic`;
  else return undefined;
});
</script>

<template>
  <div class="info-trend">
    <div class="name">
      <Graph class="name__text" :title="name" :href="nameLink">{{
        name
      }}</Graph>
    </div>
    <div class="title">{{ title }}</div>
    <div v-if="['read', 'video'].includes(type)" class="time">{{ date }}</div>
    <div v-else-if="type === 'live'" class="living">
      <img
        class="gif"
        src="/s1.hdslb.com/bfs/static/jinkela/long/images/live.gif" />
      <span class="text">直播中</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/style/mixins.scss' as *;
.info-trend {
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
  .living {
    display: inline-block;
    height: 18px;
    padding: 0 4px;
    line-height: 0;
    border: 0.5px solid var(--brand_pink);
    border-radius: 2px;
    color: var(--brand_pink);
    font-size: var(--fs0);
    .gif {
      width: 12px;
      height: 12px;
      vertical-align: middle;
    }
    .text {
      line-height: 17px;
      vertical-align: middle;
    }
  }
}
</style>
