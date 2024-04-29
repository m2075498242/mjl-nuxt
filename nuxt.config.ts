// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:true, 
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: [
    // ...
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  // alias: {
  //   '@': '~/src', // 将 '@' 别名指向 'src' 目录
  //   '~components': '~/src/components', // 将 '~components' 别名指向 'src/components' 目录
  //   '~store': '~/src/store', // 将 '~store' 别名指向 'src/store' 目录
  //   '~assets': '~/src/assets', // 将 '~assets' 别名指向 'src/assets' 目录
  //   // 可以根据项目需要添加更多的别名配置
  // },
  // alias: {
  //   "~": "/<srcDir>",
  //   "@": "/<srcDir>",
  //   "~~": "/<rootDir>",
  //   "@@": "/<rootDir>",
  //   "assets": "/<srcDir>/assets",
  //   "public": "/<srcDir>/public",
  //   "store": "/<srcDir>/store",
  //   "components": "/<srcDir>/components",
  // },  
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/assets/styles/default.scss";'
        }
      }
    }
  }
})
