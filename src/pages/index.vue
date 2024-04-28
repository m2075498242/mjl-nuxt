<template>
  <div>
    我是首页
    <NuxtLink to="/list">进入列表页</NuxtLink>
    <div>
      姓名：{{ userInfo.userName }}
      性别：{{ userInfo.sex }}
    </div>
    <div>pos: {{ x }}, {{ y }}</div>
  </div>
</template>

<script setup>
import { useUserStore } from '../store/index'
const { x, y } = useMouse()
const userInfo = useUserStore().userInfo
const foo = useFoo()
console.log(foo);
</script>

<style lang="scss" scoped>
body {
  background-color: $bgColor;
  color: $theme;
}
</style>