<script lang="ts" setup>
import ButtonNavIconTop from '@/fragments/Header/components/ButtonNavIconTop.vue';
import useI18nLocal from '@/hooks/useI18nLocal';
import i18nOptions from '@/fragments/Header/i18n';
import Collection from '@/components/Icon/Collection.vue';
import DropDown from '../components/DropDown.vue';
import CardCollection from './CardCollection/index.vue';

const { t } = useI18nLocal(i18nOptions);
</script>

<template>
  <DropDown>
    <ButtonNavIconTop :text="t('collection')">
      <template #icon="data">
        <Collection v-bind="data" />
      </template>
    </ButtonNavIconTop>
    <template #popper>
      <CardCollection />
    </template>
  </DropDown>
</template>
