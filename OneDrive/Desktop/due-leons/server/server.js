import express, { json } from "express"
import prenotazioniRoutes from "./routes/prenotazioni.js"
import mongoose from "mongoose"
import cors from "cors"

const app = express()

// ! JSON SEMPRE SEMPRE PRIMAAAA DI TUTTI
app.use(express.json())

app.use("/prenotazione", prenotazioniRoutes)

const corsOptions = {
    origin: 'http://localhost:5173/prenotazione',
    optionsSuccessStatus: 200, 
  };
  
  app.use(cors(corsOptions));
  

const PORT = process.env.PORT || 3000

const CONNECTION_URL = "mongodb://localhost:27017/AdminRistorante"

mongoose.connect(CONNECTION_URL)
.then(() => {
    console.log("Coonected to MongoDB")
    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`)
    })
})
.catch(error => console.error(error))