const { Router } = require('express')
const Crud = require('../models/Bd')

let router = Router()

router.get('/tickets/:id', async (req, res) => {
    try {
        const ticket = await Crud.findById(req.params.id)
        if (!ticket) return res.status(404).json({ message: "Ticket no encontrado" })
        res.send(ticket.tickets)
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.get('/getuser/:id', async (req, res) => {
    try {
        const user = await Crud.findById(req.params.id)
        if (!user) return res.status(404).json({ message: "Usuario no encontrado" })
        res.send(user)
    } catch (error) {
        return res.status(500).send(error)
    }
})

router.get('/user/:correo/:password/:tipoUsuario', async (req, res) => {
    try {
        const usuarioSolicitado = await Crud.find({
            "correo": req.params.correo,
            "password": req.params.password,
            "tipousuario": req.params.tipousuario
        }).exec()
        console.log(usuarioSolicitado)
        if (!usuarioSolicitado) return res.status(404).json({ message: "Usuario no encontrado" })
        res.send(usuarioSolicitado)
    } catch (error) {
        return res.status(500).send(error)
    }

})

router.get('/users', async (req, res) => {
    const users = await Crud.find()
    res.send(users)
})

router.post('/createuser', async (req, res) => {
    const { nombre, apellido, correo, password, tipoUsuario } = req.body
    const createU = new Crud({ nombre, apellido, correo, password, tipoUsuario })
    await createU.save()
    res.json(createU)
})

router.put('/createticket/:id', async (req, res) => {
    const newTicket = await Crud.findByIdAndUpdate(req.params.id, { $push: req.body }, {
        new: true
    })
    res.json(newTicket)
})

router.put('/updateuser/:id', (req, res) => {
    res.send('Actualizando usuario')
})

router.put('/updateticket/:id', async (req, res) => {

    let val = await Crud.updateOne({ '_id': req.params.id }, {
        $set: {
            'tickets.0.titulo': req.body.tickets[0].titulo,
            'tickets.0.body': req.body.tickets[0].body
        }
    })
    res.json(val)
})

router.put('/responder/:id/:ticketid', async (req, res) => {
    let ticket = `tickets.${req.params.ticketid}.respuesta`
    let show = `tickets.${req.params.ticketid}.show`
    let done = `tickets.${req.params.ticketid}.done`
    let responderTicket = await Crud.findByIdAndUpdate(req.params.id, {
        $set: { [show]: false, [done]: true },
        $push: {
            [ticket]: {
                'texto': req.body.texto,
                'autor': req.body.autor
            }
        }
    })
    res.send(responderTicket)

    //res.json(responderTicket)
})

router.get('/getaticket/:id/:ticketid', async (req, res) => {
    let ticket = await Crud.find({
        '_id': req.params.id
    }, {
        'tickets': { $elemMatch: { '_id': req.params.ticketid } }
    })
    res.send(ticket)
})

router.delete('/deleteticket/:id', async (req, res) => {
    try {
        // const ticket = await Crud.findByIdAndDelete(res.params.id)
        // if (!ticket) return res.status(404).json({ message: "Ticket no encontrado" })
        // return res.json(ticket)
        const ticket = await Crud.findById(res.params.id, (err, ticket) => {
            if (!error) {
                Crud.ticket.id()
            }
        })

    } catch (error) {
        return res.status(500).send(error)
    }

})

module.exports = router