<script lang="ts" setup>
import InfoDefault from '../../../components/ListItem/InfoDefault.vue';
import { makeInfoPropsDefault } from '@/composables/itemInfo';

defineProps({
  ...makeInfoPropsDefault(),
});
</script>

<template>
  <InfoDefault v-bind="$props" />
</template>
