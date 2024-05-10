import { Router } from "express";
import { loginController,registerController } from "~/📂controllers/users.controllers";
const usersRouter = Router()

import { loginValidator } from "~/📂middlewares/users.middlewares";
usersRouter.post('/login',loginValidator,loginController)
usersRouter.post('/register',registerController)

export default usersRouter