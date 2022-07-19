import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { ResponseHandler } from "./response-handler";

export const verifyToken = (excludedPaths: string[]) =>
    (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            if(excludedPaths.includes(req.path)) {
                return next();
            }

            const token = req.headers.authorization;
            if (!token) {
                return res.send(new ResponseHandler(null, { message: 'UNAUTHORIZED' }))
            }
            verify(token, process.env.SECRET_KEY || '');

            next();
        } catch (e) {
            return res.send(new ResponseHandler(null, { message: 'UNAUTHORIZED' }))
        }
    }