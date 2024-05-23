import { error } from 'console'
import { Request, Response, NextFunction } from 'express'
import { checkSchema } from 'express-validator'
import { validate } from '~/utils/validation'
export const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({
      error: 'missing email or password'
    })
  }
  next()
}

export const registerValidator = validate(checkSchema({
  name: {
    notEmpty: true,
    isString: true,
    isLength: {
      options: {
        min: 1,
        max: 100
      }
    },
    trim: true
  },
  email: {
    notEmpty: true,
    isEmail: true,
    trim: true
  },
  password: {
    notEmpty: true,
    isString: true,
    isLength: {
      options: {
        min: 6,
        max: 50
      }
    },
    isStrongPassword:{
      options:{
        minLength:6,
        minLowercase:1,
        minUppercase:1,
        minSymbols:1
      },
      errorMessage:'Password cần ít nhất 6 kí tự và chứa ít nhất 1 chữ hoa thường 1 kí tự'
    }
  },
  confirm_password:{
    notEmpty: true,
    isString: true,
    isLength: {
      options: {
        min: 6,
        max: 50
      }
    },
    isStrongPassword:{
      options:{
        minLength:6,
        minLowercase:1,
        minUppercase:1,
        minSymbols:1
      },
       
      errorMessage:'Password cần ít nhất 6 kí tự và chứa ít nhất 1 chữ hoa thường 1 kí tự'
    },
    custom:{
      options:(value,{req})=>{
if(value != req.body.password){
  throw new Error('Không trùng khớp')
}
return true
      }
    }
  },
  date_of_birth:{
    //iso8601
    isISO8601:{
      options:{
        strict:true,
        strictSeparator:true
      }
    }
  }
   
}))
