<script lang="ts" setup>
import Card from './Card/index.vue';
import Content from './Card/Content.vue';
import Skeleton from './Card/Skeleton.vue';
import apiBili from '@/service/api.bilibili';
import { popular } from '@/api/webInterface';
import { useAxios } from '@/composables/useAxios';
import { clearHttpPrefix } from '@/utils/helpers';
import { useRecommendBreakpoints } from '@/composables/breakpoint';
import { useIntersectionObserver } from '@/composables/observer';
import { ref, computed, watch, watchEffect } from 'vue';

import type { VideoInfo } from '../../composables/videoInfo';
import type { ComponentPublicInstance } from 'vue';

const params = ref({ pn: 1, ps: 20 });

const { request, data, loading } = useAxios<
  { data: { list: VideoInfo[] } },
  { ps: number; pn: number }
>({
  instance: apiBili,
  defaultParams: params.value,
  config: { url: popular, method: 'GET' },
  immediate: false,
});

const bk = useRecommendBreakpoints();
const rcmdCount = computed(() => {
  if (bk.smaller('md').value) return 4;
  else return 6;
});

const { entry, targetRef } = useIntersectionObserver();
const skeleton = ref<ComponentPublicInstance>();
watch(skeleton, (v) => (targetRef.value = v?.$el));
watch(entry, (v) => {
  if (v && v.intersectionRatio !== 0 && !loading.value) {
    params.value.pn++;
  }
});
watchEffect(() => request(params.value));

const dataList = ref<VideoInfo[]>([]);

watchEffect(() => dataList.value.push(...(data.value?.data.list || [])));
</script>

<template>
  <Card
    v-for="(item, index) in dataList"
    :class="{ 'rcmd-card': index >= rcmdCount }"
    :key="item.bvid">
    <Content
      :info="{
        cover: clearHttpPrefix(item.pic),
        bvid: item.bvid,
        title: item.title,
        duration: item.duration,
        date: item.pubdate,
      }"
      :rcmd-reason="{ content: item.rcmd_reason.content }"
      :owner="{ uid: item.owner.mid, username: item.owner.name }"
      :stat="{ view: item.stat.view, danmaku: item.stat.danmaku }"></Content>
  </Card>
  <Card class="rcmd-card" ref="skeleton">
    <Skeleton />
  </Card>
  <Card class="rcmd-card" v-for="_ in 9">
    <Skeleton />
  </Card>
</template>

<style lang="scss">
.video-card.rcmd-card {
  margin-top: 24px;
  margin-bottom: 16px;
}
</style>
