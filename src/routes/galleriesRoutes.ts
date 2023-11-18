import { Router } from "express";
import { createImage, updateImageById, deleteImageByTattooArtistId, getAllGallery } from "../controllers/galleriesControler";
import { auth } from "../middlewares/auth";
import { admin } from "../middlewares/admin";

const router = Router()

router.post('/create', auth, admin, createImage)
router.post('/update/:id', auth, admin, updateImageById)
router.delete('/delete', auth, admin, deleteImageByTattooArtistId)
router.get('/all', getAllGallery)

export { router }