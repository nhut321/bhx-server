const mongoose = require('mongoose')

mongoose.set("strictQuery", false);

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.tp3tu.mongodb.net/bachhoaxanh?retryWrites=true&w=majority')
        console.log('Connected to server!!')
    } catch(err) {
        console.log('Connect fail')
    }
}

module.exports = connect