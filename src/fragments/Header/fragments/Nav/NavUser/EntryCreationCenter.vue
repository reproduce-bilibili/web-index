<script lang="ts" setup>
import ButtonNavIconTop from '@/fragments/Header/components/ButtonNavIconTop.vue';
import useI18nLocal from '@/hooks/useI18nLocal';
import i18nOptions from '@/fragments/Header/i18n';
import Creation from '@/components/Icon/Creation.vue';

const { t } = useI18nLocal(i18nOptions);
</script>

<template>
  <ButtonNavIconTop :text="t('creationCenter')">
    <template #icon="data">
      <Creation v-bind="data" />
    </template>
  </ButtonNavIconTop>
</template>
