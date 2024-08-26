import { Router } from 'express'
import { wrapRequestHandler } from '~/utils/handlers'
import { validate } from '~/utils/validation'
import { loginController, registerController } from '~/📂controllers/users.controllers'
const usersRouter = Router()

import { loginValidator, registerValidator } from '~/📂middlewares/users.middlewares'
usersRouter.post('/login', loginValidator, loginController)
//Description: Register a new users
//path:/register
//method:Post
//Body:{name:string,email:string,password:string,confirm-passwordLstring, date_of_birth:ISO8601}
//trả về request handler
usersRouter.post('/register',
 registerValidator,
 wrapRequestHandler(registerController))

export default usersRouter
