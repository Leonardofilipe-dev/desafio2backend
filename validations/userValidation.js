import {validate, Joi} from "express-validation"


const validation = {
   body: Joi.object({
    userName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
   }) 
}

export default validate(validation)