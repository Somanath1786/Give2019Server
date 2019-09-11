const router = require('express').Router()
const Event = require('../models/event')

router.get('/', async(req, res, next) => {
    try {
        const queryParams = req.query;
        console.log(queryParams)
        const response = await Event.find(queryParams)
        const status = 200
        res.json({status, response})
    } catch(e)
    {
        console.error(e)
        const error = new Error('Something went wrong')
        error.status = 401
        next(error)
    }
})

router.post('/newEvent', async(req, res, next) => {
    try {
        const { title, contact, start_date, start_time, end_date,
                end_time, building, room, city, state, event_type,
                slt_leader, exec_sponsor, event_url, comments} = req.body

        const start = new Date(`${start_date} ${start_time}`)
        const end = new Date(`${end_date} ${end_time}`)

        const status = 201
        const event = await Event.create({title, contact, start, end, building, room, city, state,
                                            event_type, slt_leader, exec_sponsor, event_url, comments})

        res.status(status).json({status, event})
    } catch(e)
    {
        console.error(e)
        const error = new Error('Something went wrong')
        error.status = 401
        next(error)
    }
})

router.delete('/:eventId', async(req, res, next) => {
    try{
        const response = await Event.deleteOne({_id : req.params.eventId})
        const status = 200
        res.status(status).json({status, response})
    }
    catch(e) {
        console.error(e)
        const error = new Error('Something went wrong')
        error.status = 401
        next(error)
    }
})
module.exports = router