<script lang="ts" setup>
import ButtonNavDefault from '@/fragments/Header/components/ButtonNavDefault.vue';
import useI18nLocal from '@/hooks/useI18nLocal';
import i18nOptions from '@/fragments/Header/i18n';
import DropDown from '../components/DropDown.vue';
import CardManga from './CardManga/index.vue';
const { t } = useI18nLocal(i18nOptions);
</script>

<template>
  <DropDown>
    <ButtonNavDefault>{{ t('comic') }}</ButtonNavDefault>
    <template #popper>
      <CardManga />
    </template>
  </DropDown>
</template>
