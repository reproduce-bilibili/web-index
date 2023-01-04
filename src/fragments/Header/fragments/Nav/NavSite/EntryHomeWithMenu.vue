<script lang="ts" setup>
import ButtonNavDefault from '@/fragments/Header/components/ButtonNavDefault.vue';
import DropDown from '../components/DropDown.vue';
import Arrow from '@/components/Icon/Arrow.vue';
import EntryLogo from './EntryLogo/index.vue';
import CardCategory from './CardCategory/index.vue';
import Graph from '@/components/Graph/index.vue';
import { ref } from 'vue';
const show = ref(false);
</script>

<template>
  <DropDown class="entry-home-with-menu" v-model:shown="show">
    <ButtonNavDefault v-bind="$attrs" :jump="false">
      <Graph class="content" href="https://www.bilibili.com">
        <EntryLogo class="logo" />
        <span class="text">首页</span
        ><Arrow :class="['arrow', { 'arrow-rotate': show }]" />
      </Graph>
    </ButtonNavDefault>
    <template #popper>
      <CardCategory />
    </template>
  </DropDown>
</template>

<style lang="scss" scoped>
@use '@/style/break-point' as * with($key: nav);

.entry-home-with-menu {
  .content {
    display: flex;
    align-items: center;
    .logo {
      margin-right: var(--m6);
    }
    .text {
      margin-right: 5px;
    }
    .arrow {
      transition: transform 0.3s;
    }
    .arrow.arrow-rotate {
      transform: rotate(180deg);
    }
  }
}

@include mq($until: lg) {
  .entry-home-with-menu {
    .content {
      display: flex;
      align-items: center;
      .logo {
        margin-right: var(--m1);
      }
    }
  }
}
</style>
