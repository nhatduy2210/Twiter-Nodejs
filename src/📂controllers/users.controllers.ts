import { error } from 'console'
import { ParamsDictionary } from 'express-serve-static-core'
import { Request, Response, NextFunction } from 'express'
import User from '~/models/schemas/User.schema'
import databaseService from '~/services/database.services'
import usersService from '~/services/users.services'
import { RegisterReqBody } from '~/models/requests/User.requests'
//xử lý logic
export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email == 'leduy@gmail.com' && password == '12') {
    return res.json({
      message: 'Login success'
    })
  }

  return res.status(400).json({
    error: 'Login failed'
  })
}

export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterReqBody>,
   res: Response,
  next:NextFunction) => {
 
 
    throw new Error('error')
    const result = await usersService.register(req.body)
    return res.json({
      message: 'regis sucess',
      result
    })
 
}
