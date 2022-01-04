import { Schema, model } from 'mongoose'

const boeSchema = new Schema({
    street: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    beloning: {
        idCategory: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true

        },
        subCategory: {
            type: String,
            required: true
        }
    },
    description: {
        type: String,
        required: true,
    },
    size: [
        {
            type: String,
            required: true,
            default: ["XL, XXL, L, M"]
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