import { Router } from "express"
import { getGames, addGames} from "../controllers/games.controller.js"

const router = Router()

router.get('/', getGames)
router.get('/:consoleId', getGames)
router.post('/', addGames)

export default router