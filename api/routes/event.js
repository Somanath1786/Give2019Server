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

module.exports = router