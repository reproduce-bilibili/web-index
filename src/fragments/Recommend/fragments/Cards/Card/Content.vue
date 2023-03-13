<script lang="ts" setup>
import Graph from '@/components/Graph/index.vue';
import { computed, PropType } from 'vue';
import dayjs from 'dayjs';
import SvgIcon from '@/components/SvgIcon.vue';

const props = defineProps({
  info: {
    type: Object as PropType<{
      cover: string;
      bvid: string;
      duration: number;
      title: string;
      date: number;
    }>,
    required: true,
  },
  rcmdReason: {
    type: Object as PropType<{
      content: string;
    }>,
    required: true,
  },
  owner: {
    type: Object as PropType<{
      uid: number;
      username: string;
    }>,
    required: true,
  },
  stat: {
    type: Object as PropType<{
      view: number;
      danmaku: number;
    }>,
    required: true,
  },
});

const hasTag = computed(() => !!props.rcmdReason.content);
const userLinkText = computed(() =>
  props.owner.username.concat(
    hasTag.value ? '' : ` · ${dayjs(props.info.date).format('M-D')}`,
  ),
);
const videoUrl = computed(
  () => `https://www.bilibili.com/video/${props.info.bvid}`,
);
</script>

<template>
  <Graph :href="videoUrl">
    <div class="video-card__cover-wrap">
      <div class="video-card__cover">
        <div class="video-card__cover__content" v-img.eager="info.cover"></div>
      </div>
    </div>
  </Graph>
  <div class="video-card__title">
    <Graph :href="videoUrl" :title="info.title">{{ info.title }}</Graph>
  </div>
  <div class="video-card__subtitle">
    <div v-if="rcmdReason.content" class="video-card__subtitle-tag">
      {{ rcmdReason.content }}
    </div>
    <Graph
      class="video-card__subtitle-link"
      :href="`https://space.bilibili.com/${owner.uid}`">
      <span class="video-card__subtitle-link__icon">
        <SvgIcon name="widget-up" />
      </span>
      <span class="video-card__subtitle-link__username">
        {{ userLinkText }}
      </span>
    </Graph>
  </div>
</template>

<style lang="scss">
@use '@/style/mixins.scss' as *;
.video-card {
  &__cover-wrap {
    position: relative;
    border-radius: 6px;
    overflow: hidden;
  }
  &__cover {
    padding-top: 56.25%;
    height: 0;
    &__content {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &__title {
    @include line-clamp(2);
    padding-right: var(--title-padding-right);
    line-height: var(--title-line-height);
    height: calc(var(--title-line-height) * 2);
    margin-top: var(--title-margin-top);
    a {
      color: var(--text1);
      transition: color 0.2s;
    }
    a:hover {
      color: var(--brand_blue);
    }
  }

  &__subtitle {
    font-size: var(--subtitle-font-size);
    line-height: var(--subtitle-line-height);
    height: var(--subtitle-line-height);
    margin-top: 4px;
    display: flex;
    align-items: center;

    &-tag {
      padding: 0 4px;
      margin-right: 4px;
      border-radius: 4px;
      overflow: hidden;
      font-size: var(--subtitle-tag-font-size);
      color: var(--Or5);
      background-color: var(--Or1);
    }

    &-link {
      display: inline-flex;
      transition: color 0.2s;
      color: var(--text3);
      line-height: inherit;
      &__icon {
        display: inline-flex;
        height: var(--subtitle-line-height);
        width: var(--subtitle-line-height);
        margin-right: 2px;
      }
    }
    &-link:hover {
      color: var(--brand_blue);
    }
  }
}
</style>
