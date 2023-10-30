import { Router } from "express";
import { register, login } from "../controllers/tattoo_artistsController";
import { auth } from "../middlewares/auth";
import { isSuperAdmin } from "../middlewares/isSuperAdmin";

const router = Router()

router.post('/register', auth, isSuperAdmin, register)
router.post('/login', login)

export { router }