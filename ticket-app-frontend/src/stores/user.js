import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'Usuario',
    eliminar: false
  }),
  getters: {},
  actions: {}
})
