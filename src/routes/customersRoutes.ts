import { Router } from "express";
import { register, login, profile, update, getAllAppointmentByCustomerId } from "../controllers/customersController";
import { auth } from "../middlewares/auth";

const router = Router()

router.post('/register', register)

router.post('/login', login)

router.get('/profile', auth, profile)

router.put('/update', auth, update)

router.get('/appointment', auth, getAllAppointmentByCustomerId)

export { router }