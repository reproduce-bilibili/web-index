<script lang="ts" setup>
import ButtonNavBase from '@/components/Button/ButtonNavBase.vue';
defineProps({
  src: {
    type: String,
    required: true,
    default: '',
  },
  href: {
    type: String,
    required: true,
    default: '',
  },
  title: {
    type: String,
    required: true,
    default: '',
  },
});
</script>

<template>
  <ButtonNavBase class="card-game-center-game-banner" :href="href" target="_blank">
    <div class="card-game-center-game-banner__img" v-img="src"></div>
    <div class="card-game-center-game-banner__title">
      {{ title }}
    </div>
  </ButtonNavBase>
</template>

<style lang="scss" scoped>
.card-game-center-game-banner {
  position: relative;
  &__img {
    border-radius: var(--radius2);
    overflow: hidden;
  }
  &__title {
    color: #fff;
    font-size: var(--fs0);
    position: absolute;
    bottom: 1em;
    left: 1em;
  }
}
</style>
