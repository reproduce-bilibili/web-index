<script lang="ts" setup>
import ButtonNavIconTop from '@/fragments/Header/components/ButtonNavIconTop.vue';
import useI18nLocal from '@/hooks/useI18nLocal';
import i18nOptions from '@/fragments/Header/i18n';
import Trend from '@/components/Icon/Trend.vue';
import DropDown from '../components/DropDown.vue';
import CardTrend from './CardTrend/index.vue';
import BadgeCount from '../components/BadgeCount.vue';

const { t } = useI18nLocal(i18nOptions);
</script>

<template>
  <DropDown>
    <ButtonNavIconTop :text="t('trend')">
      <template #icon="data">
        <Trend v-bind="data" />
      </template>
    </ButtonNavIconTop>
    <BadgeCount class="nav-badge-count" :count="4" />
    <template #popper>
      <CardTrend />
    </template>
  </DropDown>
</template>
