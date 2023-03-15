import { CommonServerOptions, defineConfig, PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons-next';
import path from 'path';

function createProxy(host: string): CommonServerOptions['proxy'] {
  return {
    [`/${host}`]: {
      target: `https://${host}`,
      changeOrigin: true,
      rewrite(p) {
        return p.replace(`/${host}`, '');
      },
      headers: {
        referer: 'https://www.bilibili.com',
      },
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({ optimize: false, enableObjectSlots: false }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, './src/icons')],
      symbolId: '[dir]-[name]',
    }) as unknown as PluginOption,
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
  },
  server: {
    proxy: {
      ...createProxy('i0.hdslb.com'),
      ...createProxy('s1.hdslb.com'),
      ...createProxy('i2.hdslb.com'),
      ...createProxy('i1.hdslb.com'),
      ...createProxy('api.bilibili.com'),
    },
    port: 23333,
  },
});
