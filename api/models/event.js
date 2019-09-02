const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        required : true
    },
    startTime : {
        type : Date,
        required : true
    },
    endTime : {
        type : Date,
        required : true
    },
    building : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    event_type : {
        type : String,
        required : true
    },
    slt_leader : {
        type : String,
        required : true
    },
    leader : {
        type : String
    },
    event_url : {
        type: String
    }
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

module.exports = mongoose.model('Event', schema)