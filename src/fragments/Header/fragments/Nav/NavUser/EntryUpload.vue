<script lang="ts" setup>
import ButtonNavBase from '@/components/Button/ButtonNavBase.vue';
import useI18nLocal from '@/hooks/useI18nLocal';
import i18nOptions from '@/fragments/Header/i18n';
import Upload from '@/components/Icon/Upload.vue';
import DropDown from '../components/DropDown.vue';
import UploadMenu from './UploadMenu/index.vue';

const { t } = useI18nLocal(i18nOptions);
</script>

<template>
  <DropDown>
    <ButtonNavBase class="entry--upload">
      <Upload class="entry--upload__icon" />
      <span class="entry--upload__text">{{ t('contribute') }}</span>
    </ButtonNavBase>
    <template #popper>
      <UploadMenu />
    </template>
  </DropDown>
</template>

<style lang="scss" scoped>
.entry--upload {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #fb7299;
  color: #fff;
  height: 34px;
  border-radius: var(--radius2);
  text-align: center;
  font-size: var(--fs1);
  transition-duration: 0.3s;
  &:hover {
    background-color: #fc8bab;
  }
  &__text {
    margin-left: 5px;
  }
}
</style>
