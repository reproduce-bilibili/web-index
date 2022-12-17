<script lang="ts" setup>
import { computed, PropType } from 'vue';
import Graph from '@/components/Graph/index.vue';
import DropDownMenu from '../../components/DropDownMenu.vue';
import Level from './Level.vue';
import { makeUserInfoPropsDefault } from '@/composables/userInfo';
import Count from './Count.vue';
import LevelCard from './LevelCard.vue';
import LinkList from './LinkList.vue';
import LinkItem from './LinkItem.vue';
import IconLogout from '@/components/Icon/Logout.vue';

const { userInfo } = defineProps({ ...makeUserInfoPropsDefault() });

const userSpaceLink = computed(
  () => `https://space.bilibili.com/${userInfo.uid}`,
);
const userFollowLink = computed(
  () => `https://space.bilibili.com/${userInfo.uid}/fans/follow`,
);
const userFanLink = computed(
  () => `https://space.bilibili.com/${userInfo.uid}/fans/fans`,
);
const userDynamicLink = computed(
  () => `https://space.bilibili.com/${userInfo.uid}/dynamic`,
);

const levelItemList: InstanceType<typeof LevelCard>['$props']['itemList'] = [
  { title: '一、购买邀请码', contents: ['1个/月'] },
  { title: '二、发表作品点评' },
  { title: '三、发射个性弹幕', contents: ['包括色彩、高级、顶部'] },
  { title: '四、参与社区互动', contents: ['包括评论、私信、动态'] },
];
</script>

<template>
  <div class="card-user">
    <div :class="['card-user__nickname', { vip: userInfo.isVip }]">
      <Graph class="link" :href="userSpaceLink">{{ userInfo.nickname }}</Graph>
    </div>
    <div v-show="userInfo.isVip" class="card-user__vip-tag">
      <Graph
        class="link"
        href="https://account.bilibili.com/account/big"
        v-img="
          '/i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png@40h_0e'
        " />
    </div>
    <div class="card-user__coin">
      <Graph class="link" href="https://account.bilibili.com/site/coin">
        <span class="text">硬币:</span
        ><span class="count">{{ userInfo.coinCount }}</span>
      </Graph>
      <Graph
        class="link"
        href="https://pay.bilibili.com/pay-v2-web/bcoin_index">
        <span class="text">B币:</span
        ><span class="count">{{ userInfo.bCoinCount }}</span>
      </Graph>
    </div>
    <DropDownMenu container=".card-user">
      <Level class="card-user__level" :user-info="userInfo" />
      <template #popper>
        <LevelCard class="card-user__level__card" :user-info="userInfo" :item-list="levelItemList" />
      </template>
    </DropDownMenu>
    <div class="card-user__count">
      <Count
        :href="userFollowLink"
        label="关注"
        :count="userInfo.followCount" />
      <Count :href="userFanLink" label="粉丝" :count="userInfo.fanCount" />
      <Count
        :href="userDynamicLink"
        label="动态"
        :count="userInfo.dynamicCount" />
    </div>
    <LinkList class="card-user__link-list" />
    <div class="card-user__split-line"></div>
    <LinkItem class="card-user__logout">
      <span>退出登录</span>
      <template #icon><IconLogout /></template>
    </LinkItem>
  </div>
</template>

<style lang="scss" scoped>
@use '@/style/mixins.scss' as *;
.card-user {
  width: 300px;
  padding: 0 24px 18px;
  &__nickname {
    margin-top: 44px;
    text-align: center;
    font-size: var(--fs4);
    @include flex-center();
    &.vip a {
      color: #fb7299;
    }
    .link {
      overflow: hidden;
      -webkit-line-clamp: 1;
      text-overflow: ellipsis;
    }
  }
  &__vip-tag {
    @include flex-center();
    margin: 4px 0;
    & .link {
      height: 20px;
      width: 69px;
    }
  }
  &__coin {
    @include flex-center();
    font-size: var(--fs0);
    margin-bottom: 4px;
    .text {
      margin-right: 5px;
      color: var(--text3);
    }
    .count {
      color: var(--text1);
    }
    .link + .link {
      margin-left: 10px;
    }
  }
  &__level {
    margin-bottom: 10px;
    &__card {
      padding: 20px 10px 15px 20px;
    }
  }
  &__count {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom: 12px;
  }
  &__link-list {
  }
  &__split-line {
    margin: 10px 0;
    width: 100%;
    height: 1px;
    background: var(--line_regular);
  }
}
</style>
