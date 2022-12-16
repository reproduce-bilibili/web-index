<script lang="ts" setup>
import { makeImgProps } from '@/composables/img';
import { makeInfoProps } from '../../composables/info';
import Img from './components/Img.vue';
import Info from './components/Info.vue';
import { Avatar } from '@/components/Avatar';
import ListItem from '../../components/ListItem.vue';
import { makeItemTypeProps } from '../../composables/ItemType';
import { makeUserInfoSimpleProps } from '@/composables/userInfo';
import { computed } from 'vue';

const props = defineProps({
  ...makeItemTypeProps(),
  ...makeImgProps(),
  ...makeInfoProps(),
  ...makeUserInfoSimpleProps(),
});

const avatarHref = computed(() => {
  if (['video', 'read'].includes(props.type)) {
    return `https://space.bilibili.com/${props.userInfo?.uid}/dynamic`;
  } else return undefined;
});

const showAvatarTag = computed(() => ['video', 'read'].includes(props.type));
</script>

<template>
  <ListItem class="trend-item" :title="title">
    <Avatar
      class="avatar"
      :user-info="userInfo"
      :title="name"
      :href="avatarHref"
      :src="`${userInfo?.avatar}@120w_120h_1c_1s.webp`"
      :show-tag="showAvatarTag" />
    <Info class="info" :title="title" :date="date" :name="name" :type="type" />
    <Img class="img" :src="`${src}@128w_72h_1c.webp`" />
  </ListItem>
</template>

<style lang="scss" scoped>
.trend-item {
  padding: 12px 20px;
  display: flex;
  .avatar {
    width: 38px;
    height: 38px;
    align-items: flex-start;
    flex-shrink: 0;
  }
  .info {
    margin: 0 10px;
  }
  .img {
    margin-top: 13px * 1.25 + 4px;
    width: 82px;
    height: 46px;
    flex-shrink: 0;
  }
}
</style>
