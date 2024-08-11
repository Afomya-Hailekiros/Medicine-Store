const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Medicine = require('./model/medicineSchema')  // Import your Medicine model

const app = express()

app.use(express.json())
app.use(cors());
   
const PORT =process.env.PORT || 7002
app.listen(PORT, () => {
     console.log(`Server is running on PORT ${PORT}...`)
})
const DB = 'mongodb://127.0.0.1:27017/crudoperation'
mongoose.connect(DB, {
     
}).then(() =>{
     console.log('Database connected..')
 }).catch((error) => {
     console.error('Database connection failed:', error.message)
 });


// POST route to add a new medicine
app.post('/medicines', async (req, res) => {
    try {
        console.log(req.body);  // Log the received data
        const newMedicine = new Medicine(req.body);
        const savedMedicine = await newMedicine.save();
        res.status(201).json(savedMedicine);
        res.send({success : true, message : "data save successfully"})

    } catch (error) {
        console.error(error.message);  // Log the error message
        res.status(400).json({ message: error.message });
    }
});

 
 // GET route to retrieve all medicines
 app.get('/medicines', async (req, res) => {
     try {
         const medicines = await Medicine.find();
         res.status(200).json(medicines);  // Send back all medicines with a 200 status
     } catch (error) {
         res.status(500).json({ message: error.message });  // Handle any errors
     }
 });
 
 // GET route to retrieve a single medicine by ID
 app.get('/medicines/:id', async (req, res) => {
     try {
         const medicine = await Medicine.findById(req.params.id);
         if (!medicine) return res.status(404).json({ message: 'Medicine not found' });
         res.status(200).json(medicine);  // Send back the medicine with a 200 status
     } catch (error) {
         res.status(500).json({ message: error.message });  // Handle any errors
     }
 });
 
 // PUT route to update a medicine by ID
 app.put('/medicines/:id', async (req, res) => {
     try {
         const updatedMedicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true });
         if (!updatedMedicine) return res.status(404).json({ message: 'Medicine not found' });
         res.status(200).json(updatedMedicine);  // Send back the updated medicine with a 200 status
     } catch (error) {
         res.status(400).json({ message: error.message });  // Handle any errors
     }
 });
 
 // DELETE route to remove a medicine by ID
 app.delete('/medicines/:id', async (req, res) => {
     try {
         const deletedMedicine = await Medicine.findByIdAndDelete(req.params.id);
         if (!deletedMedicine) return res.status(404).json({ message: 'Medicine not found' });
         res.status(200).json({ message: 'Medicine deleted successfully' });  // Send a success message with a 200 status
     } catch (error) {
         res.status(500).json({ message: error.message });  // Handle any errors
     }
 });