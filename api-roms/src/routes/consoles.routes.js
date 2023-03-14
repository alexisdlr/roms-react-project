import { Router } from "express"
import { addConsoles, deleteConsole, getConsoles} from "../controllers/consoles.controller.js"

const router = Router()

router.get('/', getConsoles)
router.post('/', addConsoles)

router.delete('/:id', deleteConsole)

export default router