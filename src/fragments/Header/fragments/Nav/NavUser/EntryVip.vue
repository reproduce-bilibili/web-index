<script lang="ts" setup>
import ButtonNavIconTop from '@/fragments/Header/components/ButtonNavIconTop.vue';
import useI18nLocal from '@/hooks/useI18nLocal';
import i18nOptions from '@/fragments/Header/i18n';
import Vip from '@/components/Icon/Vip.vue';

const { t } = useI18nLocal(i18nOptions);
</script>

<template>
  <ButtonNavIconTop :text="t('vip')">
    <template #icon="data">
      <Vip v-bind="data" />
    </template>
  </ButtonNavIconTop>
</template>
