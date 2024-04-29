# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Directory Structure

```js
├─.eslintignore // eslint忽略文件
├─.gitignore //git忽略文件
├─eslintrc.js
├─nuxt.config.ts // nuxt配置文件
├─package.json // 项目配置文件
├─pnpm-lock.yaml // 依赖版本锁定
├─prettier.config.js
├─README.md // 项目说明文件
├─tsconfig.json //ts配置文件
├─src 
|  ├─app.vue //根组件
|  ├─store  //数据状态管理
|  ├─plugins
|  ├─pages //路由页面
|  ├─layouts //页面构建组件
|  ├─composables
|  ├─components //组件
|  ├─assets //静态文件
├─server //接口服务器目录
```

Nuxt有一些约定目录，有特殊功能，如：pages目录的vue文件会自动注册路由

Nuxt.js自带基于文件的路由系统，不需要安装vue-router，不需要额外配置

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
