import { PrenotazioneTavolo } from "../models/prenotazione.js"

export const prenotazioneDaFrontEnd = async (req, res) => {
    console.log("Dati ricevuti dal frontend:", req.body);
    const dataPrenotazione = req.body
    const newPrenotazione = new PrenotazioneTavolo(dataPrenotazione)
    try {
        await newPrenotazione.save()
        res.status(201).json(newPrenotazione)
    } catch(error) {
        res.status(500).send(error.message)
    }
}
