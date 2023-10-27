import { Router } from "express";
import { register } from "../controllers/customersController";

const router = Router()

router.post('/register', register)

export { router }