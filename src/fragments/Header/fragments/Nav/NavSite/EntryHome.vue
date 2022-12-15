<script lang="ts" setup>
import ButtonNavIconLeft from '@/fragments/Header/components/ButtonNavIconLeft.vue';
import BiliTv from '@/components/Icon/BiliTv.vue';
import useI18nLocal from '@/hooks/useI18nLocal';
import i18nOptions from '@/fragments/Header/i18n';
const { t } = useI18nLocal(i18nOptions);
</script>

<template>
  <ButtonNavIconLeft :text="t('indexPage')">
    <template #icon="data">
      <BiliTv v-bind="data" />
    </template>
  </ButtonNavIconLeft>
</template>
