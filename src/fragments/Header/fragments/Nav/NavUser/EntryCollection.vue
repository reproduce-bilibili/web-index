<script lang="ts" setup>
import ButtonNavIconTop from '@/fragments/Header/components/ButtonNavIconTop.vue';
import useI18nLocal from '@/hooks/useI18nLocal';
import i18nOptions from '@/fragments/Header/i18n';
import Collection from '@/components/Icon/Collection.vue';

const { t } = useI18nLocal(i18nOptions);
</script>

<template>
  <ButtonNavIconTop :text="t('collection')">
    <template #icon="data">
      <Collection v-bind="data" />
    </template>
  </ButtonNavIconTop>
</template>
