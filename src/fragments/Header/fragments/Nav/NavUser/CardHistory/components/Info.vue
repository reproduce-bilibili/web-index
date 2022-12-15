<script lang="ts">
export const makeInfoProps = propsFactory({
  title: String,
  deviceType: {
    type: String as PropType<keyof typeof deviceIconMap>,
    default: 'pc',
  },
  date: String,
  name: String,
});
</script>

<script lang="ts" setup>
import Graph from '@/components/Graph/index.vue';
import IconUp from '@/components/Icon/Up.vue';
import { propsFactory } from '@/utils/propsFactory';
import { PropType } from 'vue';
import { deviceIconMap } from './constant';

defineProps({
  ...makeInfoProps(),
});
</script>

<template>
  <Graph class="history-info">
    <div class="title" :title="title">{{ title }}</div>
    <div class="date">
      <component :is="deviceIconMap[deviceType]" class="icon-device" />{{
        date
      }}
    </div>
    <div class="name" :title="name"><IconUp class="icon-name" />{{ name }}</div>
  </Graph>
</template>

<style lang="scss" scoped>
@use '@/style/mixins.scss' as *;

.history-info {
  display: flex;
  flex-direction: column;
  .title {
    @include line-clamp(2);
    $line-height: 18px;
    height: $line-height * 2;
    line-height: $line-height;
    font-size: var(--fs2);
    margin-bottom: 4px;
    color: var(--text1);
    word-break: break-all;
  }
  .name,
  .date {
    color: var(--text3);
    font-size: var(--fs0);
    display: flex;
    align-items: center;
  }
  .date {
    .icon-device {
      margin-right: 3px;
    }
  }
  .name {
    .icon-name {
      margin-right: 5px;
    }
  }
}
</style>
