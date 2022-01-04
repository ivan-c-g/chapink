import { Schema, model } from 'mongoose'

const boeSchema = new Schema({
    street: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    strais: {
        type: String,
        required: true
    },

    plant: {
        type: String,
        required: true,
    },
    door: {

        type: String,
        required: true,
    } 
    ],
photos: [
    {
        url: {
            type: String,
        },
        color: {
            type: String,
        }
    }
],
    colors: [
        {
            type: String,
        }
    ],
}, { timestamps: true })

global.Boe = global.Boe || model("Boe", boeSchema)
export default global.Boe