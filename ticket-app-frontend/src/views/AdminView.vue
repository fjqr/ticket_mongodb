<template>
  <Navbar :name="`${store.name}: ${store.nombre} ${store.apellido}`" />
  <div class="container">
    <div class="row justify-content-center my-5">
      <!-- FORMULARIO -->

      <!-- <div class="col-md-4">
        <form action="">
          <div class="mb-3">
            <textarea
              name="Respuesta"
              id="Respuesta"
              cols="30"
              ref="res"
              rows="10"
              placeholder=" Escribe tu respuesta"
              class="mb-4 form-control"
              v-model="store.respuesta"
              @input="enable($event)"
            ></textarea>
          </div>
        </form>
      </div> -->

      <!-- TABLA -->

      <div class="col-md-12 ov">
        <table class="table">
          <caption>
            Tickets Recibidos
          </caption>
          <thead>
            <tr>
              <th scope="col">Usuario</th>
              <th scope="col">
                <table>
                  <thead>
                    <tr>
                      <th scope="col" style="padding: 0 3.5rem 0 0">Título</th>
                      <th scope="col" style="padding: 0 3.5rem">Descripción</th>
                      <th scope="col" style="padding: 0 3.5rem">Fecha</th>
                      <th scope="col" style="padding: 0 3.5rem">Estado</th>
                      <th scope="col" style="padding: 0 0 0 3.5rem">Acción</th>
                    </tr>
                  </thead>
                </table>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(tickets, index) of store.tickets" :key="index">
              <td>{{ tickets.nombre }} {{ tickets.apellido }}</td>
              <td>
                <table class="table">
                  <tbody>
                    <tr
                      v-for="(ticket, tIndex) of tickets.tickets"
                      :key="tIndex"
                    >
                      <td class="text-wrap">{{ ticket.titulo }}</td>
                      <td class="text-wrap">{{ ticket.body }}</td>
                      <td class="text-wrap">
                        {{ ticket.fecha.match(/\d{4}-\d{2}-\d{2}/g)[0] }}
                      </td>
                      <td v-if="ticket.done === true" class="text-success">
                        Completado
                      </td>
                      <td class="text-danger" v-else>Pendiente</td>
                      <td>
                        <!-- <button v-if="ticket.done === true" class="btn-sm btn-success"
                                                    @click="limpiar">Limpiar</button> -->
                        <button
                          v-if="store.res === false || ticket.done === true"
                          class="btn-sm btn-secondary"
                          disabled
                        >
                          Responder
                        </button>
                        <!-- <button
                          v-else
                          class="btn-sm btn-primary"
                          @click="responder(tickets, tIndex)"
                        >
                          Responder
                        </button> -->

                        
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- SUBMIT  - LOG OUT-->

    <div class="row mb-4 justify-content-start">
      <div class="col-md-4 d-grid gap-2 col-6 mx-auto">
        <!-- <input type="submit" value="Enviar" class="btn btn-primary"> -->
        <input type="submit" value="Salir" class="btn btn-danger" />
      </div>
    </div>
  </div>

  <button @click="popUp()">Open Modal</button>
  
  <Teleport to=".pop">
    <div v-if="store.open === true" class="modal">
      <p>Hello from the modal!</p>
      <button @click="store.open = false">Close</button>
    </div>
  </Teleport>
  <div class="pop"></div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import { useFetch } from "../../fetch";
import { useAdminStore } from "../stores/admin";
import { useLoginStore } from "../stores/login";
import { onMounted, ref } from "vue";
const store = useAdminStore();
const loginStore = useLoginStore();
const res = ref(null);
const adminUser = async () => {
  const params = window.location.pathname.match(/\w+$/g)[0];
  const query = await useFetch(store.adminQueryUrl + params);
  store.nombre = query.nombre;
  store.apellido = query.apellido;
};

const getTickets = async () => {
  const tickets = await useFetch(store.getUsersTickets);
  store.tickets = tickets.filter((v) => v.tickets.length >= 1);
  store.tickets.forEach((v) => {
    v.tickets.forEach((val) =>
      val.show === false
        ? (store.showTicket = false)
        : (store.showTicket = true)
    );
  });
};

const popUp = () => {
  store.open = !store.open
  console.log(store.open)
}

const responder = async (ticket, id) => {
  // let res = [{
  //     "show": false,
  //     "done": true,
  //     "respuesta": [{
  //         "texto": store.respuesta,
  //         "autor": `${store.nombre} ${store.apellido}`
  //     }]
  // }]

  let res = [
    {
      texto: store.respuesta,
      autor: `${store.nombre} ${store.apellido}`,
    },
  ];
  let resUrl = `${store.respondTickets}${ticket._id}/${id}`;
  const query = await useFetch(resUrl, "PUT", res);

  store.respuesta = "";
};

const limpiar = (ticket) => {
  ticket.show = false;
};

const enable = (event) => {
  if (res.value.value === "") {
    store.res = false;
  } else {
    store.res = true;
  }
};

onMounted(() => {
  adminUser();
  getTickets();
});
</script>
<style scoped>
.ov {
  overflow: auto;
  height: 25rem;
}

.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 25rem;
  height:15rem;
  background-color: red;
  margin-left: -150px;
}
</style>
