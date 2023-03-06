import { Router } from "express"
import { addConsoles, getConsoles} from "../controllers/consoles.controller.js"

const router = Router()

router.get('/', getConsoles)
router.post('/', addConsoles)


export default router