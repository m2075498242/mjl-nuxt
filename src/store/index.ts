import { defineStore } from 'pinia'

const USER_INFO = {
  userName: '马师傅',
  id: 1,
  sex: '男',
}

export const useUserStore = defineStore('userInfo', () => {

  const userInfo = reactive(USER_INFO)

  return {
    userInfo,
  }
})
