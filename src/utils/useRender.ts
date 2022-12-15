// Utilities
import { getCurrentInstance } from 'vue';

// Types
import type { VNode } from 'vue';

export function useRender(render: () => VNode | undefined): void {
  const vm = getCurrentInstance() as any;
  vm.render = render;
}
