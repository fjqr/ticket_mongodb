import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useSignupStore = defineStore({
  id: 'signup',
  state: () => ({
    name: 'Registro',
    signupUrl: 'http://localhost:3000/createuser',
    method: 'POST',
    nombre: null,
    apellido: null,
    correo: null,
    password: null,
    tipoUsuario: ref("Usuario"),
    tipoUsuarioValue: [{ tipo: "Usuario" }, { tipo: "Administrador" }]
  }),
  getters: {},
  actions: {}
})
