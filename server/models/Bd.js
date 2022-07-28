const { Schema, model, now } = require('mongoose')

const crudSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    correo: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    tipoUsuario: {
        type: String,
        required: true
    },
    tickets: [{
        titulo: {
            type: String

        }, body: {
            type: String
        },
        fecha: {
            type: Date,
            default: Date.now
        },
        respuesta: [{
            texto: String,
            autor: String
        }],
        done: {
            type: Boolean,
            default: false
        },
        show: {
            type: Boolean,
            default: true
        }
    }]
}, { versionKey: false })

module.exports = model('Crud', crudSchema)