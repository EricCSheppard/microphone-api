

const mongoose = require('mongoose')
const Mic = require('./mic')
const db = require('../../config/db')



const startMics = [
    { model: "SM58", make: "Shure", type: "Dynamic", phantom: false },
    { model: "C414", make: "AKG", type: "Condenser", phantom: true },
    { model: "SM81", make: "Shure", type: "Condenser", phantom: true },
    { model: "U87", make: "Neumann", type: "Condenser", phantom: true },
    { model: "4038", make: "Coles", type: "Ribbon", phantom: false }
]

mongoose.connect(db, {
    useNewURLParser: true   
})
    .then(() => {
        Mic.deleteMany()
            .then(deletedMics => {
                console.log('the deleted mics:', deletedMics)
                // now we add our mics to the db
                Mic.create(startMics)
                    .then(newMics => {
                        console.log('the new mics:', newMics)
                        mongoose.connection.close()
                    })
                    .catch(error => {
                        console.log(error)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })