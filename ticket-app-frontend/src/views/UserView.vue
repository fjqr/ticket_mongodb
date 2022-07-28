<template>
    <Navbar :name="store.name" />
    <div class="container">

        <!-- FORMULARIO -->

        <div class="row justify-content-center my-5">
            <div class="col-md-4">
                <form action="">
                    <div class="mb-3">
                        <input type="text" name="title" id="title" placeholder="Título" class="mb-4 form-control">
                    </div>
                    <div class="mb-3">
                        <textarea name="descripcion" id="descripcion" cols="30" rows="10" placeholder="Descripción"
                            class="mb-4 form-control"></textarea>
                    </div>
                </form>
            </div>

            <!-- TABLA -->

            <div class="col-md-8 overflow-auto">
                <table class="table">
                    <caption>Tickets enviados</caption>
                    <thead>
                        <tr>
                            <th scope="col">Título</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button class="btn btn-primary m-2">Editar</button>
                                <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    data-bs-whatever="@mdo" @click="store.eliminar = true"> Eliminar</button>

                                <!-- VENTANA EMERGENTE -->

                                <div class="modal fade" id="exampleModal" tabindex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">¿Por qué desas eliminar
                                                    la solicitud de soporte?</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <form>
                                                    <div class="mb-3">
                                                        <label for="message-text"
                                                            class="col-form-label">Mensaje:</label>
                                                        <textarea class="form-control" id="message-text"></textarea>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Cerrar</button>
                                                <button type="button" class="btn btn-primary">Confirmar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- FIN DE VENTANA -->

                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>

        <!-- SUBMIT  - LOGOUT-->

        <div class="row mb-4 justify-content-start">
            <div class="col-md-4 d-grid gap-2 col-6 mx-auto">
                <input type="submit" value="Confirmar" class="btn btn-primary">
                <input type="submit" value="Salir" class="btn btn-danger">
            </div>
        </div>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import { useUserStore } from '../stores/user';
const store = useUserStore()
</script>

