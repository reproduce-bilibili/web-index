<script lang="ts" setup>
import { makeImgProps } from '@/composables/img';
import { makeInfoPropsSimple } from '@/composables/itemInfo';
import Img from './components/Img.vue';
import Info from './components/Info.vue';
import { Avatar } from '@/components/Avatar';
import ListItem from '../../components/ListItem/index.vue';
import IconWatchLater from '@/components/Icon/WatchLater.vue';
import IconDone from '@/components/Icon/Done.vue';
import { makeItemTypeProps } from '@/composables/itemInfo';
import { makeUserInfoPropsSimple } from '@/composables/userInfo';
import { computed, ref } from 'vue';

const props = defineProps({
  ...makeItemTypeProps(),
  ...makeImgProps(),
  ...makeInfoPropsSimple(),
  ...makeUserInfoPropsSimple(),
});

const avatarHref = computed(() => {
  if (['video', 'read'].includes(props.type)) {
    return `https://space.bilibili.com/${props.userInfo?.uid}/dynamic`;
  } else return undefined;
});

const showAvatarTag = computed(() => ['video', 'read'].includes(props.type));

const hasWatchLater = ref(false);
</script>

<template>
  <ListItem class="trend-item" :title="title">
    <Avatar
      class="avatar"
      :user-info="userInfo"
      :title="name"
      :href="avatarHref"
      :src="`${userInfo?.avatar}@120w_120h_1c_1s.webp`"
      :show-tag="showAvatarTag"
      border-color="var(--graph_bg_thick)" />
    <Info
      class="info"
      :title="title"
      :date="date"
      :name="name"
      :type="type"
      :user-info="userInfo" />
    <Img class="img" :src="`${src}@128w_72h_1c.webp`">
      <div
        v-if="props.type === 'video'"
        class="img__cover-button"
        @click.prevent="hasWatchLater = !hasWatchLater">
        <IconWatchLater v-show="!hasWatchLater" class="icon" />
        <IconDone v-show="hasWatchLater" class="icon" />
      </div>
    </Img>
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
    flex-grow: 1;
    flex-basis: 0;
  }
  .img {
    margin-top: 13px * 1.25 + 4px;
    width: 82px;
    height: 46px;
    flex-shrink: 0;
    &:hover .img__cover-button {
      display: block;
    }
    &__cover-button {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 28px;
      height: 28px;
      padding: 3px;
      background-color: rgba(33, 33, 33, 0.8);
      border-radius: 6px;
      transform: translate(-50%, -50%);
      .icon {
        color: #fff;
        width: 22px;
        height: 22px;
      }
    }
  }
}
</style>
