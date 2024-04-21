import express from "express"
import { prenotazioneDaFrontEnd } from "../controllers/prenotazione.js"

const router = express.Router()

router.post("/", prenotazioneDaFrontEnd)

export default router