<script lang="ts" setup>
import { makeImgProps } from '@/composables/img';
import Container from './components/Container.vue';
import Img from './components/Img.vue';
import Info, { makeInfoProps } from './components/Info.vue';

defineProps({
  ...makeImgProps(),
  ...makeInfoProps(),
});
</script>

<template>
  <Container class="video-container">
    <Img class="img" :src="src"><slot name="img-cover" /></Img>
    <Info
      class="info"
      :title="title"
      :device-type="deviceType"
      :date="date"
      :name="name" />
  </Container>
</template>

<style lang="scss" scoped>
.video-container {
  display: flex;
  .img {
    width: 128px;
    height: 72px;
    margin-right: 10px;
    flex-shrink: 0;
  }
  .info {
    flex-grow: 1;
  }
}
</style>
