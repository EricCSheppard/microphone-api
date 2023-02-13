const express = require('express')

const passport = require('passport')

const Mic = require('../models/mic')

const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })


const router = express.Router()

// ROUTES

// POST -> Create a box

router.post('/box/:micId', removeBlanks, (req, res, next) => {
    const box = req.body.box
    const micId = req.params.micId
    Mic.findById(micId)
        .then(handle404)
        .then(mic => {
            console.log('the mic: ', mic)
            console.log('the case: ', box)
            mic.box.push(box)
            return mic.save()
        })
        .then(mic => res.status(201).json({ mic: mic }))
        // pass errors along to our error handler
        .catch(next)
})

// PATCH -> Update
router.patch('/box/:micId/:boxId', requireToken, removeBlanks, (req, res, next) => {
    // get and save the id's to variables
    const micId = req.params.micId
    const boxId = req.params.boxId

    Mic.findById(micId)
        .then(handle404)
        .then(mic => {
                const theBox = mic.box.id(boxId)
                requireOwnership(req, mic)
                theBox.set(req.body.box)
                return mic.save()
        })
        // send a status
        .then(() => res.sendStatus(204))
        .catch(next)
})

// DELETE -> Destroy a box

router.delete('/box/:micId/:boxId', requireToken, (req, res, next) => {
    const micId = req.params.micId
    const boxId = req.params.boxId
    Mic.findById(micId)
    .then(handle404)
    .then(mic => {
        const theBox = mic.box.id(boxId)
        requireOwnership(req, mic)
        theBox.remove()
        return mic.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router