import type { TouchStoredHandlers } from './directives/touch'
import type { Events, VNode } from 'vue'

declare global {
  interface HTMLCollection {
    [Symbol.iterator] (): IterableIterator<Element>
  }

  interface Element {
    __b_mutation_observer__?: MutationObserver
    __b_resize_observer__?: ResizeObserver
    __b_click_outside_handler__?: any
  }

  namespace JSX {
    interface Element extends VNode {}
    interface IntrinsicAttributes {
      [name: string]: any
    }
  }
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    _: ComponentInternalInstance
  }

  export interface ComponentInternalInstance {
    ctx: Record<string, unknown>
    provides: Record<string, unknown>
    setupState: any
  }

  export interface FunctionalComponent {
    aliasName?: string
  }

  // eslint-disable-next-line max-len
  export interface ComponentOptionsBase<Props, RawBindings, D, C extends ComputedOptions, M extends MethodOptions, Mixin extends ComponentOptionsMixin, Extends extends ComponentOptionsMixin, E extends EmitsOptions, EE extends string = string, Defaults = {}> {
    aliasName?: string
  }
}
