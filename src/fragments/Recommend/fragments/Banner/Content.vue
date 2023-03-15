<script lang="ts" setup>
import {
  onMounted,
  onBeforeUnmount,
  ref,
  shallowRef,
  computed,
  watchEffect,
  watch
} from 'vue';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import SvgIcon from '@/components/SvgIcon.vue';
import Graph from '@/components/Graph/index.vue';
import 'swiper/css';
import { LinkProps } from '@/composables/link';
import Color from 'colorthief';
import { arr2RGB } from '@/utils/helpers';

const swiper = shallowRef<Swiper>();

const color = new Color();

const curColor = ref('');

onMounted(() => {
  swiper.value = new Swiper('.b-banner__content', {
    modules: [Navigation, Pagination, Autoplay],
    autoplay: {
      delay: 5000,
    },
    loop: true,
    allowTouchMove: false,
    speed: 400,
    spaceBetween: 0,
    direction: 'horizontal',
  });
  swiper.value.on('activeIndexChange', (swiper) => {
    curIndex.value = swiper.realIndex;
    curActiveIndex.value = swiper.activeIndex;
  });
});

onBeforeUnmount(() => {
  swiper.value?.destroy();
});

const curIndex = ref(0);
const prevIndex = ref(0);
const curActiveIndex = ref(0);
const right = ref(true);

watch(curIndex, (cur, pre) => prevIndex.value =  pre)

watchEffect(() => {
  if (!swiper.value) return;
  if (curIndex.value === prevIndex.value) right.value = true;
  else if (curIndex.value === dataList.value.length - 1) {
    right.value = prevIndex.value !== 0
  } else if (curIndex.value === 0) {
    right.value = prevIndex.value === dataList.value.length - 1
  } else {
    right.value = curIndex.value > prevIndex.value;
  }
  const img =
    swiper.value.slides[curActiveIndex.value].getElementsByTagName('img')[0];
  if (!img) return;
  if (img.complete) {
    curColor.value = arr2RGB(color.getColor(img, 50));
    dataList.value[curIndex.value].color = curColor.value;
  } else {
    const cb = function () {
      curColor.value = arr2RGB(color.getColor(img, 50));
      dataList.value[curIndex.value].color = curColor.value;
      img.removeEventListener('load', cb);
    };
    img.addEventListener('load', cb);
  }
});

const dataList = computed<(LinkProps & { src: string; title: string })[]>(
  () => [
    {
      href: 'https://www.bilibili.com/bangumi/play/ep704485',
      target: '_blank',
      src: '/i0.hdslb.com/bfs/banner/fb89980d95a2a194ef852d9a7943dc4bb4e0c352.png@976w_550h_1c_!web-home-carousel-cover',
      title: '量子态即将覆盖高空中转站',
    },
    {
      href: 'https://www.bilibili.com/bangumi/play/ep735729',
      target: '_blank',
      src: '/i0.hdslb.com/bfs/banner/cb08f8e353c222926db0b537b44bcdf9e6302c43.png@976w_550h_1c_!web-home-carousel-cover',
      title: '对他使用「地咚」吧!!',
    },
    {
      href: 'https://www.bilibili.com/bangumi/play/ep738313',
      target: '_blank',
      src: '/i0.hdslb.com/bfs/banner/1e6a569c9ba8e2d4fe576f3510d0982fd9d1b2c9.png@976w_550h_1c_!web-home-carousel-cover',
      title: '超燃！草根橄榄球队逆袭路',
    },
    {
      href: 'https://www.bilibili.com/bangumi/play/ep738353',
      target: '_blank',
      src: '/i0.hdslb.com/bfs/banner/6b4ed7c91f92e3cf66b0f79548505a54ed1530ad.png@976w_550h_1c_!web-home-carousel-cover',
      title: '致郁系丧片！把悲伤演绎到极致',
    },
  ],
);
</script>

<template>
  <div
    class="b-banner__content"
    @mouseenter="swiper?.autoplay.pause()"
    @mouseleave="swiper?.autoplay.resume()">
    <div class="swiper-wrapper b-banner__content__wrapper">
      <Graph
        class="swiper-slide b-banner__content__item"
        v-for="banner in dataList"
        v-img.eager="banner.src"
        :href="banner.href"
        :target="banner.target">
      </Graph>
    </div>
  </div>
  <div
    class="b-banner__mask"
    :style="`background-color: ${dataList[curIndex].color || curColor}`"></div>
  <div class="b-banner__tools">
    <Graph :href="dataList[curIndex].href" target="_blank">
      {{ dataList[curIndex].title }}
    </Graph>
    <ul>
      <li
        v-for="(_, index) in dataList.length"
        :class="{ 'is-active': index === curIndex, 'right': !!right, 'left': !right }" @click="swiper?.slideTo(index)"></li>
    </ul>
  </div>
  <div class="b-banner__buttons">
    <div class="b-banner__buttons__prev" @click="swiper?.slidePrev()">
      <SvgIcon name="widget-arrow" style="transform: rotate(180deg)" />
    </div>
    <div class="b-banner__buttons__next" @click="swiper?.slideNext()">
      <SvgIcon name="widget-arrow" />
    </div>
  </div>
</template>

<style lang="scss">
@use '@/style/mixins.scss' as *;
@use '@/style/break-point' as * with($key: banner);

.b-banner__content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-basis: 0;
  z-index: 1;
  &__item {
    display: block;
    height: auto;
    object-fit: contain;
    align-self: flex-start;
    user-select: none;
  }
}
.b-banner__mask {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200%;
  z-index: 2;
  pointer-events: none;
  -webkit-mask-image: linear-gradient(0, #2f3238 9%, transparent 17%);
  mask-image: linear-gradient(0, #2f3238 9%, transparent 17%);
}
.b-banner__tools {
  position: absolute;
  bottom: 19px;
  left: 15px;
  z-index: 3;
  a {
    display: block;
    line-height: 25px;
    color: #ffffff;
    font-weight: 400;
    @include line-clamp(1);
    @include mq($from: lg) {
      font-size: var(--fs5);
    }
    @include mq($until: lg) {
      font-size: var(--fs4);
    }
    margin-bottom: 10px;
    margin-left: -1.5px;
  }
  ul {
    font-size: 0;
    li {
      vertical-align: middle;
      display: inline-block;
      list-style-type: none;
      width: 8px;
      height: 8px;
      margin: 4px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.4);
      overflow: hidden;
      cursor: pointer;
      position: relative;
    }
    li:nth-child(1) {
      margin-left: 0;
    }
    li.is-active {
      width: 14px;
      height: 14px;
      margin-top: 0;
      margin-bottom: 0;
      background-color: transparent;
      @keyframes banner-eater-right {
        10% {
          transform: rotate(40deg);
        }
        25% {
          transform: rotate(0);
        }
        40% {
          transform: rotate(40deg);
        }
        55% {
          transform: rotate(0);
        }
      }
      @keyframes banner-eater-left {
        10% {
          transform: rotate(-40deg);
        }
        25% {
          transform: rotate(0);
        }
        40% {
          transform: rotate(-40deg);
        }
        55% {
          transform: rotate(0);
        }
      }
      &.right {
        &::before {
          animation: banner-eater-left 1000ms;
        }
        &::after {
          animation: banner-eater-right 1000ms;
        }
      }
      &.left {
        &::before {
          animation: banner-eater-right 1000ms;
        }
        &::after {
          animation: banner-eater-left 1000ms;
        }
      }
      &::before, &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        background-color: #ffffff;
        width: 14px;
        height: 14px;
      }
      &::before {
        bottom: 50%;
        transform-origin: center bottom;
      }
      &::after {
        top: 50%;
        transform-origin: center top;
      }
    }
  }
}
.b-banner__buttons {
  position: absolute;
  bottom: 42px;
  right: 15px;
  z-index: 3;
  & > * {
    @include flex-center();
    display: inline-flex;
    cursor: pointer;
    border-radius: 8px;
    width: 28px;
    height: 28px;
    svg {
      width: 12px;
      height: 12px;
      color: #fff;
    }
    background-color: rgba(255, 255, 255, 0.1);
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
    &:active {
      transform: scale(0.95);
    }
    &:nth-child(1) {
      margin-right: 12px;
    }
  }
}
</style>
