import { propsFactory } from '@/utils/propsFactory';
import { ref, Ref } from 'vue';

export type UseTabsTabItem<T> = {
  id: string | number;
  title?: string;
  activeTitle?: string;
  isActive?: boolean;
} & T;

export interface UseTabsOptions<T> {
  tabs?: UseTabsTabItem<T>[];
  defaultActive?: UseTabsTabItem<T>['id'];
}

export interface UseTabsReturns<T> {
  tabs: Ref<UseTabsOptions<T>['tabs']>;
  setActiveTab: (
    target: number | UseTabsTabItem<T>,
  ) => UseTabsTabItem<T> | null;
  activeTab: Ref<UseTabsTabItem<T> | null>;
  deleteTab: (target: number | UseTabsTabItem<T>) => UseTabsTabItem<T>[];
  addTab: Array<UseTabsTabItem<T>>['push'];
}

export const useTabs = <T>(options?: UseTabsOptions<T>): UseTabsReturns<T> => {
  const tabs = ref(options?.tabs || []) as Ref<UseTabsTabItem<T>[]>;

  const activeTab = ref<UseTabsTabItem<T> | null>(
    (tabs.value.find((v) => v.id === options?.defaultActive) ||
      tabs.value[0] ||
      null) as UseTabsTabItem<T> | null,
  ) as Ref<UseTabsTabItem<T> | null>;

  const setActiveTab = (target: number | UseTabsTabItem<T>) => {
    if (typeof target === 'number')
      return (activeTab.value =
        (tabs.value.find((v) => v.id === target) as UseTabsTabItem<T>) || null);
    else
      return (activeTab.value =
        tabs.value.indexOf(target) === -1 ? null : target);
  };

  const deleteTab = (target: number | UseTabsTabItem<T>) => {
    if (typeof target === 'number') return tabs.value.splice(target, 1);
    else return tabs.value.splice(tabs.value.indexOf(target), 1);
  };

  const addTab = (...args: Parameters<typeof tabs.value.push>) =>
    tabs.value.push(...args);
  return {
    tabs,
    activeTab,
    setActiveTab,
    deleteTab,
    addTab,
  };
};

export const makeTabItemProps = propsFactory({
  id: {
    type: [String, Number],
    required: true,
  },
  title: String,
  activeTitle: {
    type: String,
    required: false,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});
