import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJSX(),
    Components({ resolvers: [AntDesignVueResolver()] }),
  ],

  resolve: {
    alias: [
      // `process.cwd()`: get working directory at node running
      { find: /@\//, replacement: resolve(process.cwd(), '.', 'src') + '/' },
      { find: /#\//, replacement: resolve(process.cwd(), '.', 'types') + '/' },
    ],
  },

  css: { devSourcemap: true },
})
