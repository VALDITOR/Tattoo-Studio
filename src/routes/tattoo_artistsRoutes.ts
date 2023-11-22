import { Router } from "express";
import { register, login, profile, update, getAllAppointmentByTattooArtistId, getAllTattooArtist, getAllCustomers, updateAdmin, updateAdminCustomers, getAllAppointment } from "../controllers/tattoo_artistsController";
import { auth } from "../middlewares/auth";
import { isSuperAdmin } from "../middlewares/isSuperAdmin";
import { admin } from "../middlewares/admin";

const router = Router()

router.post('/register', auth, isSuperAdmin, register)
router.post('/login', login)
router.get('/profile', auth, admin, profile)
router.put('/update', auth, admin, update)
router.get('/appointment/:id', auth, admin, getAllAppointmentByTattooArtistId)
router.get('/all', auth, getAllTattooArtist)
router.get('/customers', auth, admin, getAllCustomers)
router.put('/update_admin', auth, isSuperAdmin, updateAdmin)
router.put('/update_admin_customer', auth, isSuperAdmin, updateAdminCustomers)
router.get('/appointment', auth, admin, getAllAppointment)

export { router }