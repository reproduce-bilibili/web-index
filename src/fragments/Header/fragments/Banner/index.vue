<script lang="ts" setup>
import Graph from '@/components/Graph/index.vue';
</script>

<template>
  <div class="b-header-banner">
    <img
      class="b-header-banner__cover"
      src="/i0.hdslb.com/bfs/archive/009c7accbad2e95a27908a18e6cedbd4380a5faf.png@3840w_360h_1c_90q" />
    <div class="b-header-banner__filter"></div>
    <Graph
      class="b-header-banner__content"
      href="https://www.bilibili.com/blackboard/activity-iLmpWZS8SQ.html">
      <div class="b-header-banner__info">
        <Graph class="logo-link" href="https://www.bilibili.com"
          ><img
            class="logo-img"
            width="162"
            height="78"
            src="/i0.hdslb.com/bfs/archive/c46d6b1ec5f41a4f059cddf7744472a21839f8ee.png"
        /></Graph>
        <Graph
          class="text-link"
          href="www.bilibili.com/blackboard/activity-IQiF1QjSDZ.html?spm_id_from=333.1007.0.0"
          >好玩的足球都在这，快点我</Graph
        >
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
      transition: opacity .3s;
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
