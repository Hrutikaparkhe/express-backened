import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { ResponseHandler } from './response-handler';


export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res
            .status(403)
            .send(new ResponseHandler(null, { message: 'BAD REQUEST' }))
    }

    next();
}