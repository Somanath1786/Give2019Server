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
    start : {
        type : Date,
        required : true
    },
    end : {
        type : Date,
        required : true
    },
    building : {
        type : String,
        required : true
    },
    room : {
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
    exec_sponsor : {
        type : String
    },
    event_url : {
        type: String
    },
    comments : {
        type : String
    }
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

module.exports = mongoose.model('Event', schema)