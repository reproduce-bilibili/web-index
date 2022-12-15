<script lang="ts" setup>
import ButtonNavDefault from './ButtonNavDefault.vue';
defineProps({
  text: {
    type: String,
    required: true,
  },
  picSrc: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <ButtonNavDefault class="entry--scroll" :jump="false">
    <div>{{ text }}</div>
    <img class="entry--scroll__pic" :src="picSrc" />
    <div>{{ text }}</div>
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </ButtonNavDefault>
</template>

<style lang="scss" scoped>
.entry--scroll {
  animation: scroll infinite 10s;
  & > * {
    text-align: center;
  }
  .entry--scroll__pic {
    display: block;
    margin: 14px 0;
    height: 36px;
  }
}
</style>
