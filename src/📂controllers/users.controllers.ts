import { error } from 'console'
import { Request, Response, NextFunction } from 'express'
import User from '~/models/schemas/User.schema'
import databaseService from '~/services/database.services'
import usersService from '~/services/users.services'
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

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
  const result = await usersService.register({email,password})
    return res.json({
      message: 'regis sucess',
      result
    })
  } catch (error) {
    return res.status(400).json({
      error: 'regis falied'
    })
  }
}
