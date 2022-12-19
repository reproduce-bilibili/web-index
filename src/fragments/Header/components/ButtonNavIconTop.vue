<script lang="ts" setup>
import ButtonNavDefault from './ButtonNavDefault.vue';
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <ButtonNavDefault class="entry--icon-top" :jump="false">
    <slot name="icon" class="entry--icon-top__icon" />
    <span class="entry--icon-top__text">{{ text }}</span>
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </ButtonNavDefault>
</template>

<style lang="scss" scoped>
.entry--icon-top {
  display: inline-flex;
  flex-direction: column;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  // min-width: 50px;
  &:hover {
    :slotted(.entry--icon-top__icon) {
      animation: jump 0.3s;
    }
  }
  :slotted(.entry--icon-top__icon) {
    margin-bottom: 2px;
    width: 20px;
    height: 20px;
  }
  .entry--icon-top__text {
    word-break: keep-all;
    font-size: var(--fs1);
  }
}
</style>
