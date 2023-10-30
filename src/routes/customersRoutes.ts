import { Router } from "express";
import { register, login, profile, update } from "../controllers/customersController";
import { auth } from "../middlewares/auth";

const router = Router()

router.post('/register', register)

router.post('/login', login)

router.get('/profile', auth, profile)

router.put('/update', auth, update)

export { router }