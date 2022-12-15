<script lang="ts" setup>
import ButtonNavIconLeft from '@/fragments/Header/components/ButtonNavIconLeft.vue';
import DownloadClient from '@/components/Icon/DownloadClient.vue';
import useI18nLocal from '@/hooks/useI18nLocal';
import i18nOptions from '@/fragments/Header/i18n';
import DropDown from '../components/DropDown.vue';
import CardDownload from './CardDownload/index.vue';
const { t } = useI18nLocal(i18nOptions);
</script>

<template>
  <DropDown>
    <ButtonNavIconLeft :text="t('downloadClient')">
      <template #icon="data">
        <DownloadClient v-bind="data" />
      </template>
    </ButtonNavIconLeft>
    <template #popper>
      <CardDownload />
    </template>
  </DropDown>
</template>
