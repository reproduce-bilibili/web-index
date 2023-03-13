export type VideoInfo = {
  aid: number;
  bvid: string;
  cid: number;
  duration: number;
  pic: string;
  pubdate: number;
  owner: {
    mid: number;
    name: string;
  };
  rcmd_reason: {
    content: string;
    corner_mark: number;
  };
  stat: {
    aid: number;
    coin: number;
    danmaku: number;
    view: number;
  };
  title: string;
};
