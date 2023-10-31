import { Router } from "express";
import { register, login, profile, update } from "../controllers/tattoo_artistsController";
import { auth } from "../middlewares/auth";
import { isSuperAdmin } from "../middlewares/isSuperAdmin";

const router = Router()

router.post('/register', auth, isSuperAdmin, register)
router.post('/login', login)
router.get('/profile', auth, profile)
router.put('/update', auth, update)


export { router }