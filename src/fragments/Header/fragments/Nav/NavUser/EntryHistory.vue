<script lang="ts" setup>
import ButtonNavIconTop from '@/fragments/Header/components/ButtonNavIconTop.vue';
import useI18nLocal from '@/hooks/useI18nLocal';
import i18nOptions from '@/fragments/Header/i18n';
import History from '@/components/Icon/History.vue';
import Dropdown from '../components/DropDown.vue'
import CardHistory from './CardHistory/index.vue';

const { t } = useI18nLocal(i18nOptions);
</script>

<template>
  <Dropdown :distance="20.875">
    <ButtonNavIconTop :text="t('history')">
      <template #icon="data">
        <History v-bind="data" />
      </template>
    </ButtonNavIconTop>
    <template #popper>
      <CardHistory />
    </template>
  </Dropdown>
</template>
