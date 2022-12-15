<script lang="ts" setup>
import ButtonNavDefault from '@/fragments/Header/components/ButtonNavDefault.vue';
import useI18nLocal from '@/hooks/useI18nLocal';
import i18nOptions from '@/fragments/Header/i18n';
const { t } = useI18nLocal(i18nOptions);
</script>

<template>
  <ButtonNavDefault>{{ t('match') }}</ButtonNavDefault>
</template>
