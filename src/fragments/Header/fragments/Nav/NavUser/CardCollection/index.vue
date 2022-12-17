<script lang="ts" setup>
import { UseTabsTabItem } from '@/composables/tabs';
import { userInjectUser } from '@/composables/userInfo';
import { ref } from 'vue';
import Content from './Content.vue';
import Tabs from './Tabs.vue';

const userInfo = userInjectUser();

const curTab = ref<UseTabsTabItem<{ count: number }> | null>(null);
</script>

<template>
  <div class="card-collection">
    <Tabs class="tabs" :user-info="userInfo" @change="(v) => (curTab = v)" />
    <Content
      class="collection"
      :user-info="userInfo"
      :collection-id="curTab?.id" />
  </div>
</template>

<style lang="scss" scoped>
.card-collection {
  height: 540px;
  width: 520px;
  display: flex;
  .tabs {
    flex-shrink: 0;
    width: 150px;
    padding: 12px 0;
    border-right: 1px solid var(--line_regular);
  }
  .collection {
    flex-grow: 1;
  }
}
</style>
