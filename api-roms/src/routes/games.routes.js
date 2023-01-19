import { Router } from "express"
import { getGames} from "../controllers/games.controller.js"

const router = Router()

router.get('/', getGames)


export default router