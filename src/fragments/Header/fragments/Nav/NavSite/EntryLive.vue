<script lang="ts" setup>
import ButtonNavDefault from '@/fragments/Header/components/ButtonNavDefault.vue';
import useI18nLocal from '@/hooks/useI18nLocal';
import i18nOptions from '@/fragments/Header/i18n';
import CardLive from './CardLive/index.vue';
import DropDown from '../components/DropDown.vue';
const { t } = useI18nLocal(i18nOptions);
</script>

<template>
  <DropDown :overflow-padding="18">
    <ButtonNavDefault v-bind="$attrs">{{
      t('liveStreaming')
    }}</ButtonNavDefault>
    <template #popper>
      <CardLive />
    </template>
  </DropDown>
</template>
