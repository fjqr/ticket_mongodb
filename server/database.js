const { connect } = require('mongoose')

const connectDataBase = async () => {
    try {
        const db = await connect('mongodb+srv://invitado:EDxeAwYKkE75qEuo@cluster0.9gaue.mongodb.net/?retryWrites=true&w=majority')
        console.log(db.connection.name)
        return db
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDataBase

