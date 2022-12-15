<script lang="ts" setup>
import DropDown from './DropDown.vue';
</script>

<template>
  <DropDown theme="header-card-right" placement="right" v-bind="$attrs">
    <template v-for="(slot, name) in $slots" v-slot:[name]>
      <slot :name="name" />
    </template>
  </DropDown>
</template>
