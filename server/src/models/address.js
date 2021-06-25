const mongoose = require("mongoose");
const Schema = mongoose.Schema

const addressSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        userId: {
            type: Number,
            required: false
        }
    }
    ,{timestamp: true}
)

module.exports = mongoose.model("Address", addressSchema)