<script lang="ts" setup>
import ButtonNavIconTop from '@/fragments/Header/components/ButtonNavIconTop.vue';
import useI18nLocal from '@/hooks/useI18nLocal';
import i18nOptions from '@/fragments/Header/i18n';
import Msg from '@/components/Icon/Msg.vue';
import BadgeWrapper from '@/components/Badge/BadgeWrapper.vue';
import DropDown from '../components/DropDown.vue';
import MsgMenu from './MsgMenu/index.vue';
import { computed, ref } from 'vue';

const { t } = useI18nLocal(i18nOptions);

const data = ref([
  {
    title: '回复我的',
    href: 'https://message.bilibili.com/#/reply',
    count: 12,
  },
  {
    title: '@我的',
    href: 'https://message.bilibili.com/#/at',
    count: 3,
  },
  {
    title: '收到的赞',
    href: 'https://message.bilibili.com/#/love',
    count: 233,
  },
  {
    title: '系统消息',
    href: 'https://message.bilibili.com/#/system',
  },
  {
    title: '我的消息',
    href: 'https://message.bilibili.com/#/whisper',
    count: 95,
  },
]);
const totalCount = computed(() =>
  data.value.reduce((p, c) => p + (c.count || 0), 0),
);
</script>

<template>
  <DropDown :distance="20.875">
    <BadgeWrapper :count="totalCount" :offset="{ left: '26px', top: '-6px' }">
      <ButtonNavIconTop :text="t('msg')">
        <template #icon="data">
          <Msg v-bind="data" />
        </template>
      </ButtonNavIconTop>
    </BadgeWrapper>
    <template #popper>
      <MsgMenu :menu-item-list="data" />
    </template>
  </DropDown>
</template>
