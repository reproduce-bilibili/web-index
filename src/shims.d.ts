import type {
  ComponentPublicInstance,
  FunctionalComponent,
  UnwrapNestedRefs,
  VNodeChild,
} from 'vue';

namespace JSX {
  interface ElementChildrenAttribute {
    $children: {};
  }
}

declare module 'vue' {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>;
}

declare module '@vue/runtime-dom' {
  export interface HTMLAttributes {
    $children?: VNodeChild;
  }
  export interface SVGAttributes {
    $children?: VNodeChild;
  }
}
