<script setup>
import Navbar from '../components/Navbar.vue'
import { useSignupStore } from '../stores/signup';
import { ref } from 'vue'
import { useFetch } from '../../fetch'
const store = useSignupStore()

const registro = async () => {
  try {

    let data = {

      "nombre": store.nombre,
      "apellido": store.apellido,
      "correo": store.correo,
      "password": store.password,
      "tipoUsuario": store.tipoUsuario
    }
    if (typeof Object.values(data).indexOf(undefined) >= 0) return

    console.log(data)
    let query = await useFetch(store.signupUrl, store.method, data)
    window.location.replace('/login')
  } catch (error) {
    alert(error)
  }
  store.nombre = ""
  store.apellido = ""
  store.correo = ""
  store.password = ""
  store.tipoUsuario = ""
}
</script>

<template>
  <Navbar :name="store.name" />
  <div class="container">

    <!-- FORMULARIO -->

    <div class="row justify-content-center my-5">
      <div class="col-md-4">
        <form action="">
          <div class="mb-3">
            <input type="text" name="name" id="name" placeholder="Nombre" class="mb-4 form-control"
              v-model="store.nombre">
          </div>
          <div class="mb-3">
            <input type="text" name="lastname" id="lastname" placeholder="Apellido" class="mb-4 form-control"
              v-model="store.apellido">
          </div>
          <div class="mb-3">
            <input type="email" name="correo" id="correo" placeholder="Correo" class="mb-4 form-control"
              v-model="store.correo">
          </div>
          <div class="mb-3">
            <input type="password" name="password" id="password" placeholder="Contraseña" class="mb-4 form-control"
              v-model="store.password">
          </div>
          <div class="mb-3">
            <div class="col form-check mb-4">
              <label for="admin" clsas="form-check-label">Administrador</label>
              <input type="radio" name="admin" id="admin" ref="admin" class="form-check-input" value="Administrador"
                v-model="store.tipoUsuario">
            </div>
          </div>
          <div class="mb-3">
            <div class="col form-check mb-4">
              <label for="user" class="form-check-label">Usuario</label>
              <input type="radio" name="user" id="user" ref="usuario" class="form-check-input" value="Usuario"
                v-model="store.tipoUsuario">
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- SUBMIT-->

    <div class="row mb-4 justify-content-center">
      <div class="col-md-4 d-grid gap-2 col-6 mx-auto">
        <input type="submit" value="Enviar" class="btn btn-primary" @click="registro">
      </div>
    </div>

    <!-- LINK LOGIN -->

    <div class="row justify-content-center mb-4">
      <div class="col-md-4">
        <p>¿Ya tienes una cuenta?</p>
        <RouterLink to="/login">Ingresar</RouterLink>
      </div>
    </div>
  </div>


</template>
