<script lang="ts" setup>
import Graph from '@/components/Graph/index.vue';

defineProps({
  hoverText: String,
  hoverLink: String,
  logoSrc: {
    type: String,
    default:
      '/i0.hdslb.com/bfs/archive/a349e5844a068d9767d699ab4fdbaa16030af585.png',
  },
  coverLink: String,
  coverSrc: {
    type: String,
    default:
      '/i0.hdslb.com/bfs/archive/f97330ca7905307f539b2af1f64fa2a2fdb4eaed.png@3840w_360h_1c_100q',
  },
});
</script>

<template>
  <div class="b-header-banner">
    <img class="b-header-banner__cover" :src="coverSrc" />
    <div class="b-header-banner__filter"></div>
    <Graph class="b-header-banner__content" :href="coverLink">
      <div class="b-header-banner__info">
        <Graph class="logo-link" href="https://www.bilibili.com"
          ><img class="logo-img" width="162" height="78" :src="logoSrc"
        /></Graph>
        <Graph v-if="hoverText" class="text-link" :href="hoverLink">{{
          hoverText
        }}</Graph>
      </div>
    </Graph>
  </div>
</template>

<style lang="scss">
@use '@/style/mixins.scss' as *;
.b-header-banner {
  height: 9.375vw;
  max-height: 240px;
  min-height: 155px;
  &__cover {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__filter {
    position: absolute;
    width: 100%;
    height: 50%;
    background: linear-gradient(rgba(0, 0, 0, 0.4), transparent);
  }
  &__content {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  &__info {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 96px;
    position: relative;
    .logo-link {
      align-self: flex-end;
      height: 50%;
      min-height: 60px;
      width: 180px;
    }
    .logo-img {
      object-fit: contain;
    }
    .text-link {
      @include line-clamp(1);
      position: absolute;
      bottom: 25px;
      left: 380px;
      padding: 6px 10px;
      max-width: 350px;
      border-radius: 4px;
      color: #fff;
      background-color: rgba(47, 50, 56, 0.9);
      transition: opacity 0.3s;
      opacity: 0;
    }
  }
  &__info:hover {
    .text-link {
      opacity: 1;
    }
  }
}
</style>
