import { Item } from './constant';

export const showHistorySplit = (dataList: Item[], i: number) => {
  const data = dataList[i];
  return data.checked && !dataList[i - 1]?.checked;
};

export const showNoMoreTip = (dataList: Item[]) =>
  !dataList.length || dataList[0].checked;
