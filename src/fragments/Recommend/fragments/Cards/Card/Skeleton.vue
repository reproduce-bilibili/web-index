<script lang="ts" setup>
defineProps({
  loading: {
    type: Boolean,
    required: false,
    default: true,
  },
});
</script>

<template>
  <div :class="['video-card__skeleton', { loading }]">
    <div class="video-card__skeleton-cover video-card__skeleton-item"></div>
    <div class="video-card__skeleton-title video-card__skeleton-item"></div>
    <div
      class="video-card__skeleton-title--short video-card__skeleton-item"></div>
    <div class="video-card__skeleton-subtitle video-card__skeleton-item"></div>
  </div>
</template>

<style lang="scss">
@keyframes sk-loading {
  0% {
    background-position: 100% 50%;
  }
  to {
    background-position: 0% 50%;
  }
}
.video-card__skeleton.loading {
  .video-card__skeleton {
    &-item {
      animation: sk-loading 1.2s infinite;
      background: linear-gradient(
        -45deg,
        var(--graph_bg_regular) 25%,
        var(--bg1) 45%,
        var(--graph_bg_regular) 65%
      );
      background-size: 400% 100%;
    }
  }
}
.video-card__skeleton {
  &-item {
    background: var(--graph_bg_regular);
  }
  &-cover {
    height: 0;
    padding-top: 56.25%;
    border-radius: 6px;
  }
  &-title, &-title--short {
    margin-bottom: 4px;
    height: calc(var(--title-line-height) - 4px);
  }
  &-title, &-title--short, &-subtitle {
    border-radius: 4px;
  }
  &-title {
    margin-top: var(--title-margin-top);
    width: 94%;
  }
  &-title--short {
    width: 72%;
  }
  &-subtitle {
    height: var(--subtitle-line-height);
    width: 50%;
    margin-top: 8px; // 4+4 bfc
  }
}
</style>
