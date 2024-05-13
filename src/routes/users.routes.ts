import { Router } from "express";
import { loginController,registerController } from "~/📂controllers/users.controllers";
const usersRouter = Router()

import { loginValidator } from "~/📂middlewares/users.middlewares";
usersRouter.post('/login',loginValidator,loginController)
//Description: Register a new users
//path:/register
//method:Post
//Body:{name:string,email:string,password:string,confirm-passwordLstring, date_of_birth:ISO8601}

usersRouter.post('/register',registerController)

export default usersRouter