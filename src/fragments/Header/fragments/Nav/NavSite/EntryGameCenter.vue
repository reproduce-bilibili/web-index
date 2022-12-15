<script lang="ts" setup>
import ButtonNavDefault from '@/fragments/Header/components/ButtonNavDefault.vue';
import useI18nLocal from '@/hooks/useI18nLocal';
import i18nOptions from '@/fragments/Header/i18n';
import CardGameCenter from './CardGameCenter/index.vue';
import DropDown from '../components/DropDown.vue';
const { t } = useI18nLocal(i18nOptions);
</script>

<template>
  <DropDown :skidding="430 / 2 - 20 - 229.5 / 2">
    <ButtonNavDefault v-bind="$attrs">{{ t('gameCenter') }}</ButtonNavDefault>
    <template #popper>
      <CardGameCenter />
    </template>
  </DropDown>
</template>
