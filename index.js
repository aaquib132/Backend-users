const { initializeDatbase } = require('./db/db.connect')
const Hotel = require('./models/hotel.models')
initializeDatbase()
const express = require('express')
const app = express()

app.use(express.json())


const updateHotelById= async (hotelId, dataToUpdate) => {
        try {
            const updateData = await Hotel.findByIdAndUpdate(hotelId, dataToUpdate, { new: true })
            return updateData
        } catch (error) {
            throw error
        }
}

app.get("/hotels", async(req,res) => {
    const hotels = await Hotel.find()
    res.send(Hotel)
})

app.post("/hotels/:hotelId", async (req, res) => {
    try {
        const update = await updateHotelById(req.params.hotelId, req.body)
        if(update){
            res.status(200).json({message: "Hotel data is update Successfully", updateHotel: update})
        }else{
            res.status(404).json({error: "Hotel not found"})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to update Hotel data", error})
    }
})

const port = 3000

app.listen(port, () => console.log(`Surver is running on port ${port}!`))