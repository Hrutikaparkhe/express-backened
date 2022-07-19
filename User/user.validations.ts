import { body } from 'express-validator';
import { validate } from './../utility/validate';

export const CreateUserValidator = [
    body('name').isString().not().isEmpty(),
    body('email').isEmail(),
    body('password').not().isEmpty(),
    validate
]

export const LoginValidator = [
    body('email').isEmail(),
    body('password').isString().not().isEmpty(),
    validate
]
