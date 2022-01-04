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
    },
    typeProperty: {
        type: String,
        required: true,
        default: ["OFICINA", "LOCAL", "PISO", "CHALET"]
    },
    propertyPrice: {
        type: String,
        required: true
    },
    broker: {
        type: String,
        required: true
    },
    licenseAndFees: {
        type: String,
        required: true
    },
    reform: {
        type: String,
        required: true
    },
    holdingCost: {
        type: String,
        required: true
    },
    interiorDesign: {
        type: String,
        required: true
    },
    subTotal: {
        type: String,
    }

}, { timestamps: true })

global.Boe = global.Boe || model("Boe", boeSchema)
export default global.Boe