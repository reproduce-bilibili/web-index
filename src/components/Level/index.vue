<script lang="ts" setup>
import LevelZero from './LevelZero.vue';
import LevelOne from './LevelOne.vue';
import LevelTwo from './LevelTwo.vue';
import LevelThree from './LevelThree.vue';
import LevelFour from './LevelFour.vue';
import LevelFive from './LevelFive.vue';
import LevelSix from './LevelSix.vue';
import { PropType } from 'vue';

defineProps({
  level: {
    type: Number as PropType<number>,
    required: true,
    default: 0,
  },
});

const levelMap: Record<number, any> = {
  0: LevelZero,
  1: LevelOne,
  2: LevelTwo,
  3: LevelThree,
  4: LevelFour,
  5: LevelFive,
  6: LevelSix,
};
</script>

<template>
  <component :is="levelMap[level]" />
</template>
