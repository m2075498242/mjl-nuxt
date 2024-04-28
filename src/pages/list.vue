<template>
  <div>
    我是列表页
    <!-- <div v-for="item in list" :key="item.id">
      <p>{{ item.name }}</p>
      <p>{{ item.age }}</p>
      <p>{{ item.id }}</p>
    </div> -->
    <!-- 我是listItem组件 -->
    <ListItem></ListItem>
  </div>
</template>

<script setup>
let list = ref(
  [
    {
      id: 1,
      name: "张三",
      age: 18,
    },
    {
      id: 2,
      name: "李四",
      age: 20,
    },
    {
      id: 3,
      name: "王五",
      age: 22,
    },
  ]
)
</script>

<style lang="scss" scoped></style>