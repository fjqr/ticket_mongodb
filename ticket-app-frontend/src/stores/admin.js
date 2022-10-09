import { defineStore } from 'pinia'

export const useAdminStore = defineStore({
  id: 'admin',
  state: () => ({
    name: 'Administrador',
    userNombre: null,
    userApellido: null,
    userCorreo: null,
    tickets: [],
    id: null,
    respuesta: [],
    adminQueryUrl: 'http://localhost:3000/getuser/',
    getUsersTickets: 'http://localhost:3000/users',
    respondTickets: 'http://localhost:3000/responder/',
    res: false,
    showTicket: true,
    open: null
  }),
  getters: {},
  actions: {}
})
