<script lang="ts" setup>
import Graph from '@/components/Graph/index.vue';
import { LinkProps } from '@/composables/link';
import type { Component as ComponentType } from 'vue';
import IconUploadPaper from '@/components/Icon/UploadPaper.vue';
import IconUploadMusic from '@/components/Icon/UploadMusic.vue';
import IconUploadEmo from '@/components/Icon/UploadEmo.vue';
import IconUploadVideo from '@/components/Icon/UploadVideo.vue';
import IconUploadManager from '@/components/Icon/UploadManager.vue';

type MenuItem = {
  title: string;
  icon: ComponentType;
} & Pick<LinkProps, 'href'>;

const menuItemList: MenuItem[] = [
  {
    title: '专栏投稿',
    icon: IconUploadPaper,
    href: 'https://member.bilibili.com/platform/upload/text/apply',
  },
  {
    title: '音频投稿',
    icon: IconUploadMusic,
    href: 'https://member.bilibili.com/platform/upload/audio/frame',
  },
  {
    title: '贴纸投稿',
    icon: IconUploadEmo,
    href: 'https://member.bilibili.com/platform/upload/sticker',
  },
  {
    title: '视频投稿',
    icon: IconUploadVideo,
    href: 'https://member.bilibili.com/platform/upload/video/frame',
  },
  {
    title: '投稿管理',
    icon: IconUploadManager,
    href: 'https://member.bilibili.com/platform/upload-manager/article',
  },
];
</script>

<template>
  <div class="upload-menu">
    <Graph
      v-for="menuItem in menuItemList"
      class="upload-menu-item"
      :href="menuItem.href">
      <component :is="menuItem.icon" class="upload-menu-item__icon" />
      <span class="upload-menu-item__text">{{ menuItem.title }}</span>
    </Graph>
  </div>
</template>

<style lang="scss" scoped>
@use '@/style/mixins.scss' as *;
.upload-menu {
  display: flex;
  padding: 8px 10px;
  &-item {
    @include clickable-item();
    @include flex-center();
    flex-direction: column;
    border-radius: 8px;
    width: 62px;
    height: 62px;
    color: var(--text2);
    &__icon {
      margin-bottom: 6px;
      height: 28px;
      height: 28px;
    }
    &__text {
      font-size: var(--fs0);
      line-height: 16px;
    }
  }
}
</style>
