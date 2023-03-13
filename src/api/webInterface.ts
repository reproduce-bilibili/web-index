import { useAxios } from '@/composables/useAxios';
import service from '@/service/api.bilibili';

const createUrl = (url: string) => `/x/web-interface${url}`;

export const popular = createUrl('/popular');
export interface PopularParams {
  /**
   * @description 每页返回数量
   */
  ps: number;
  /**
   * @description 页码
   */
  pn: number;
}

export const rcmdIndex = createUrl('/wbi/index/top/feed/rcmd');
export interface RcmdIndexParams {
  /**
   * @description 未知，写死
   */
  fresh_type: 4;
  /**
   * @description 返回数据结构的版本，写死
   */
  feed_version: 'V8';
  /**
   * @description b站 web 端主页版本，写死
   */
  homepage_ver: 1;
  /**
   * @description 未知，写死，推测为每行的数据量
   */
  y_num: number;
  /**
   * @description 未知，推测为当前最新一行的下标
   */
  fetch_row: number;
  /**
   * @description 每次请求返回的数据量
   */
  ps: number;
  /**
   * @description 可能是页码，从 1 开始
   */
  fresh_idx: number;
  /**
   * @description 未知，与 fresh_idx 传相同值
   */
  fresh_idx_1h: number;
  /**
   * @description 未知，与 fresh_idx 传相同值
   */
  brush: number;
}
export interface RcmdIndexResponseData {
  id: number;
  bvid: string;
  cid: number;
  goto: 'av' | 'live';
  uri: string;
  pic: string;
  title: string;
  duration: number;
  pubdate: number;
  owner: {
    mid: number;
    name: string;
    face: string;
  };
  rcmd_reason: {
    content?: string;
    corner_mark: number;
  } | null;
  stat: {
    view: number;
    like: number;
    danmaku: number;
  };
  is_followed: 0 | 1;
  room_info: {
    room_id: number;
    uid: number;
    live_status: 0 | 1 | 2;
    show: {
      short_id: number;
      title: string;
      cover: string;
      keyframe: string;
      polularity_count: number;
      tag_list: null;
      live_start_time: number;
      live_id: number;
      hidden_online: boolean;
    };
  } | null;
}
export const useRcmdIndex = () => {
  const res = useAxios({
    instance: service,
  });
};
