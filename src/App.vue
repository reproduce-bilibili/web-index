<script setup lang="ts">
import Header from '@/fragments/Header/index.vue';
import Channel from '@/fragments/Channel/index.vue';
import Recommend from '@/fragments/Recommend/index.vue';
</script>

<template>
  <div id="bili-index">
    <Header />
    <Channel />
    <Recommend />
  </div>
</template>

<style lang="scss">
#bili-index {
  max-width: var(--layout_content_max_width);
  margin: 0 auto;
  background-color: var(--bg1);
}
</style>
