<script lang="ts" setup>
import { propsFactory } from '@/utils/propsFactory';
import { PropType } from 'vue';
import Graph from '@/components/Graph/index.vue';
import { makeUserInfoProps } from '../../composables/userInfo';
import IconArrow from '@/components/Icon/Arrow.vue';

defineProps({
  ...propsFactory({
    itemList: {
      type: Array as PropType<
        {
          title: string;
          contents?: string[];
        }[]
      >,
    },
  })(),
  ...makeUserInfoProps(),
});
</script>

<template>
  <div class="level-info">
    <div class="level-info__title">作为Lv.{{ userInfo.level }}, 你可以:</div>
    <div v-for="item in itemList" class="level-info__content">
      <div class="level-info__content__title">{{ item.title }}</div>
      <div
        v-for="content in item.contents"
        class="level-info__content__content">
        {{ content }}
      </div>
    </div>
    <Graph
      class="level-info__link"
      href="https://www.bilibili.com/blackboard/help.html#/?qid=59e2cffdaa69465486497bb35a5ac295">
      会员等级相关说明<IconArrow class="icon" />
    </Graph>
  </div>
</template>

<style lang="scss" scoped>
.level-info {
  min-width: 226px;
  &__title,
  &__content__title {
    font-size: var(--fs2);
    color: var(--text1);
    line-height: 20px;
  }
  &__title {
    margin-bottom: 5px;
  }
  &__content__content,
  &__link {
    font-size: var(--fs0);
    line-height: 17px;
  }
  &__content {
    &__title {
    }
    &__content {
      color: var(--text2);
      margin-bottom: 12px;
      text-indent: 2em;
    }
    margin-bottom: 12px;
  }
  &__link {
    color: var(--brand_blue);
    margin-top: 14px;
    .icon {
      transform: rotate(-90deg);
    }
  }
}
</style>
