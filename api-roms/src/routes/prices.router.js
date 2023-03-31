import { Router } from "express"
import { getPrice} from "../controllers/price.controller.js"

const router = Router()

router.get('/:username', getPrice)

export default router