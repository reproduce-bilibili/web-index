<script lang="ts" setup>
import ListItem from '../../components/ListItem/index.vue';
import ImgWithCover from '../../components/ListItem/ImgWithCover.vue';
import TagCover from '../../components/ListItem/TagCover.vue';
import InfoDefault from '../../components/ListItem/InfoDefault.vue';
import { makeInfoPropsSimple } from '@/composables/itemInfo';
import { makeImgProps } from '@/composables/img';

defineProps({
  ...makeInfoPropsSimple(),
  ...makeImgProps(),
  duration: String,
});
</script>

<template>
  <ListItem class="collection-item">
    <ImgWithCover class="img" :src="`${src}@256w_144h_1c.webp`">
      <TagCover class="tag"
        ><span class="tag__text">{{ duration }}</span></TagCover
      >
    </ImgWithCover>
    <InfoDefault :title="title" :name="name" />
  </ListItem>
</template>

<style lang="scss" scoped>
.collection-item {
  display: flex;
  padding: 10px;
  padding-left: 20px;
  .img {
    flex-shrink: 0;
    height: 72px;
    width: 128px;
    margin-right: 10px;
    .tag {
      position: absolute;
      bottom: 4px;
      right: 4px;
      &__text {
        display: inline-block;
        color: #fff;
        font-size: var(--fs0);
        line-height: 16px;
        transform: scale(0.85);
      }
    }
  }
}
</style>
