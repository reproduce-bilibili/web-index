<script lang="ts" setup>
import { toFixed } from '@/utils/helpers';
import { computed } from 'vue';
import { makeUserInfoProps } from '@/composables/userInfo';
import Level from '@/components/Level/index.vue';
import Progress from '@/components/Progress.vue';
import Graph from '@/components/Graph/index.vue';

const { userInfo } = defineProps({ ...makeUserInfoProps() });

const levelProgressPercent = computed(
  () => `${toFixed((userInfo.experience[0] / userInfo.experience[1]) * 100)}%`,
);
</script>

<template>
  <div>
    <Graph class="progress" href="https://account.bilibili.com/account/record">
      <div class="level level--current">
        <Level :level="userInfo.level" class="icon" />
      </div>
      <!-- <div class="progress__container">
        <div
          class="progress__inner"
          :style="{ width: levelProgressPercent }"></div>
      </div> -->
      <Progress class="progress" :percent="toFixed((userInfo.experience[0] / userInfo.experience[1]) * 100)" progress-color="#f3cb85"/>
      <div v-if="userInfo.level < 6" class="level level--next">
        <Level class="icon" :level="userInfo.level + 1" />
      </div>
    </Graph>
    <div v-if="userInfo.level < 6" class="info">
      当前成长{{ userInfo.experience[0] }}, 距离升级Lv.{{
        userInfo.level + 1
      }}
      还需要{{ userInfo.experience[1] - userInfo.experience[0] }}
    </div>
    <div v-else class="info">你已经站在了B站的最顶端</div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/style/mixins.scss' as *;
.progress {
  @include flex-center();
  margin-bottom: 4px;
  .level {
    width: 25px;
    height: 16px;
  }
  .icon {
    height: 100%;
    width: 100%;
  }
  .level--current {
  }
  .level--next .icon :deep(.bg) {
    fill: var(--Ga3);
  }
  .progress {
    flex-grow: 1;
    margin: 4px 6px;
    height: 2px;
  }
}
.info {
  color: var(--text4);
  font-size: var(--fs0);
}
</style>
