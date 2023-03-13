<script lang="ts" setup></script>

<template>
  <div class="video-card">
    <slot />
  </div>
</template>

<style lang="scss">
@use '@/style/mixins.scss' as *;
@use '@/style/break-point' as * with($key: video-card);
.video-card {
  --title-padding-right: 24px;
  --title-line-height: 22px;
  --title-font-size: 15px;
  --title-margin-top: 8px;
  --subtitle-font-size: 13px;
  --subtitle-line-height: 17px;
  --subtitle-tag-font-size: var(--fs0);
  @include mq($from: xl) {
    --title-line-height: 24px;
    --title-font-size: 16px;
    --subtitle-font-size: 14px;
    --title-margin-top: 12px;
    --subtitle-line-height: 19px;
  }
  @include mq($from: md, $until: xl) {
    --title-margin-top: 10px;
  }
}
</style>
