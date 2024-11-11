import express from 'express'
import { PropertyController } from '../controllers/propertyController'

const propertyController = new PropertyController();
const router = express.Router()

router.post('/property', propertyController.create)
router.get('/property', propertyController.getAll)

export default router