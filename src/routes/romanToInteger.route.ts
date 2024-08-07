import { Router } from 'express'
import romanToIntFunc from '../controllers/romanToInteger.controller'

const router: Router = Router()

router.post("/roman_to_Integer", romanToIntFunc)

export default router