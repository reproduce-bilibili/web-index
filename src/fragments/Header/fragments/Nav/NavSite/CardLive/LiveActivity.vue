<script lang="ts" setup>
import ButtonNavBase from '@/components/Button/ButtonNavBase.vue';

export type ItemActivityLive = Pick<LinkProps, 'src' | 'href'>;

defineProps<{ activityList: ItemActivityLive[] }>();
</script>

<template>
  <div class="card-live-activity">
    <ButtonNavBase
      v-for="activity in activityList"
      class="card-live-activity__item"
      v-img="activity.src"
      :href="activity.href" />
  </div>
</template>

<style lang="scss" scoped>
.card-live-activity {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__item {
    border-radius: var(--radius2);
    overflow: hidden;
  }
}
</style>
