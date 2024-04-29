<script setup lang="ts" >
// 用于SEO优化
useSeoMeta({
  title: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili官方', //标题
  description: '哔哩哔哩(bilibili.com)是国内知名的视频弹幕网站,这里有及时的动漫新番,活跃的ACG氛围,有创意的Up主。大家可以在这里找到许多欢乐', //网站描述
  keywords: 'bilibili,哔哩哔哩,视频,弹幕,ACG,动漫,番剧,up主,Up主', //关键词搜索
})
</script>
<template>
  <div>
    <!-- 相当于Router-view -->
    <NuxtPage />
    <!-- <NuxtLink to="video">视频页面</NuxtLink> 相当于router-link -->
  </div>
</template>
