<template>
  <Navbar :name="store.name" />
  <div class="container">

    <!-- FORMULARIO -->

    <div class="row justify-content-center my-5">
      <div class="col-md-4">
        <form action="">
          <div class="mb-3">
            <input type="email" name="email" id="email" placeholder="Correo" class="mb-4 form-control"
              v-model="store.correo">
          </div>
          <div class="mb-3">
            <input type="password" name="password" id="password" placeholder="Contraseña" class="mb-4 form-control"
              v-model="store.password">
          </div>
          <div class="mb-3">
            <div class="col form-check mb-4">
              <input type="radio" name="admin" id="admin" class="form-check-input" v-model="store.tipoUsuario"
                value="Administrador">
              <label for="admin">Administrador</label>
            </div>
          </div>
          <div class="mb-3">
            <div class="col form-check mb-4">
              <input type="radio" name="user" id="user" class="form-check-input" v-model="store.tipoUsuario"
                value="Usuario">
              <label for="user">Usuario</label>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- SUBMIT -->

    <div class="row mb-4 justify-content-center">
      <div class="col-md-4 d-grid gap-2 col-6 mx-auto">
        <button type="submit" class="btn btn-primary" value="Enviar" @click="login">
          ENVIAR
          <!-- <RouterLink :to="`/${store.tipoUsuario.toLowerCase()}/${store.id}`" class="text-light text-decoration-none">
            ENVIAR</RouterLink> -->
        </button>
      </div>
    </div>

  </div>


</template>
<script setup>
import Navbar from '../components/Navbar.vue'
import { useLoginStore } from '../stores/login';
import { RouterLink } from 'vue-router'
import { useFetch } from '../../fetch'
const store = useLoginStore()


const login = async () => {
  const params = `${store.correo}/${store.password}/${store.tipoUsuario}`

  const query = await useFetch(store.loginQueryUrl + params)
  store.id = query[0]._id
  Object.values(...query).length >= 3 ?
    window.location.replace(`/${store.tipoUsuario.toLowerCase()}/${store.id}`) :
    alert("Usuario No Encontrado")
}
</script>
