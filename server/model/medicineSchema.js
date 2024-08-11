const mongoose = require('mongoose')

const medicineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    batchNo: { type: String, required: true, unique: false },
    drugType: { type: String, required: true },
    unitMesurment: { type: String, required: true },
    productionDate: { type: Date, required: true },
    expiredDate: { type: Date, required: true },
    quantity: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
})

const Medicine = mongoose.model('Medicine', medicineSchema)

module.exports = Medicine
