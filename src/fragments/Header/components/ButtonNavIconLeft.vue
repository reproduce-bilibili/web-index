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
  <ButtonNavDefault class="entry--icon-left" :jump="false">
    <slot name="icon" class="entry--icon-left__icon" />
    <span>{{ text }}</span>
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </ButtonNavDefault>
</template>

<style lang="scss" scoped>
.entry--icon-left {
  display: flex;
  vertical-align: middle;
  align-items: center;
  :slotted(.entry--icon-left__icon) {
    margin-right: 6px;
  }
}
</style>
