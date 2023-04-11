import {validate, Joi} from "express-validation"


const validation = {
   body: Joi.object({
    dateEvents: Joi.date().required(),
    titleEvents: Joi.string().required(),
    attractions: Joi.string().required(),
    description: Joi.string().required(),
    capacity: Joi.number().integer().required(),
   }) 
}

export default validate(validation)