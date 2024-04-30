<script setup lang="ts">
const param1 = ref('value1')
const { data, pending, error, refresh } = await useFetch('https://api.nuxtjs.dev/mountains', {
  query: { param1, param2: 'value2' }
})
console.log(data, pending, error, refresh, 'data, pending, error, refresh');

</script>

<template>
  <pre>12321{{ data }}</pre>
</template>


<style lang="scss" scoped></style>