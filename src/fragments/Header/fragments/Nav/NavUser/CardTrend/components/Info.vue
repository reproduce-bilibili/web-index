<script lang="ts" setup>
import InfoTrend from '../../../components/ListItem/InfoTrend.vue';
import { makeUserInfoPropsSimple } from '@/composables/userInfo';
import { makeItemTypeProps } from '@/composables/itemInfo';
import { makeInfoPropsSimple } from '@/composables/itemInfo';

defineProps({
  ...makeUserInfoPropsSimple(),
  ...makeItemTypeProps(),
  ...makeInfoPropsSimple(),
});
</script>

<template>
  <InfoTrend v-bind="$props" />
</template>
