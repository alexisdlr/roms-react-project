import { Router } from "express"
import { getConsoles} from "../controllers/consoles.controller.js"

const router = Router()

router.get('/', getConsoles)


export default router