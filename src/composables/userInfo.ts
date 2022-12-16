import { propsFactory } from '@/utils/propsFactory';
import { inject, PropType, provide, Ref } from 'vue';

export const UserInfoSymbol = Symbol.for('NavUserInfo');

export interface UserInfo {
  uid: number;
  nickname: string;
  level: number;
  experience: [cur: number, max: number];
  coinCount: number;
  bCoinCount: number;
  fanCount: number;
  followCount: number;
  dynamicCount: number;
  isVip: boolean;
}

// only for test
export const mockUser: UserInfo = {
  uid: 11171730,
  nickname: 'NoraH1toMock',
  level: 5,
  experience: [28418, 28418 + 382],
  coinCount: 1560,
  bCoinCount: 0,
  fanCount: 1861,
  followCount: 203,
  dynamicCount: 12,
  isVip: true,
};

export const makeUserInfoProps = propsFactory({
  userInfo: {
    type: Object as PropType<UserInfo>,
    default() {
      return {
        ...mockUser,
      };
    },
  },
});

export const useProvideUser = (user: Ref<UserInfo>) => provide(UserInfoSymbol, user);

export const userInjectUser = () => inject<Ref<UserInfo>>(UserInfoSymbol);
