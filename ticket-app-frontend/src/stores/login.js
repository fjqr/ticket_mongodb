import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useLoginStore = defineStore({
    id: 'login',
    state: () => ({
        name: 'Ingresar',
        loginQueryUrl: 'http://localhost:3000/user/',
        id: null,
        correo: null,
        password: null,
        tipoUsuario: ref("Usuario")
    }),
    getters: {},
    actions: {}
})
