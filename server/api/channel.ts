export default defineEventHandler((event) => {
  console.log('Clicked!', event)
  return {
    list: [
      { name: '孙悟空', age: 20, work: '降妖' },
      { name: '猪八戒', age: 21, work: '吃货' },
      { name: '唐僧', age: 23, work: '紧箍咒' },
      { name: '沙悟净', age: 22, work: '挑担' },
    ],
    title: '西游记'
  }
})