import type { Directive, DirectiveBinding } from 'vue';

const setSource = (
  source: HTMLSourceElement,
  binding: DirectiveBinding<string>,
) => {
  source.srcset = binding.value;
  source.type = `image/${binding.value?.split('.').slice(-1)}`;
  return source;
};

const setImg = (img: HTMLImageElement, binding: DirectiveBinding<string>) => {
  img.src = binding.value;
  binding.modifiers.lazy && (img.loading = 'lazy');
  binding.modifiers.eager && (img.loading = 'eager');
  return img;
};

const img: Directive<Element, string> = {
  created(el, binding) {
    const pic = document.createElement('picture');
    pic.classList.add('v-img');

    const source = setSource(document.createElement('source'), binding);
    const img = setImg(document.createElement('img'), binding);

    pic.appendChild(source);
    pic.appendChild(img);
    el.appendChild(pic);
  },
  updated(el, binding) {
    const pic = el.getElementsByClassName('v-img')?.[0];
    if (!pic) return;

    const source = pic.getElementsByTagName('source')?.[0];
    source && setSource(source, binding);

    const img = pic.getElementsByTagName('img')?.[0];
    img && setImg(img, binding);
  },
};

export default img;
