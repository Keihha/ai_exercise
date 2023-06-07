import { validationResult } from "express-validator";
import { Request, Response } from "express";


// Recopila ERRORS de validadores y los retorna en JSON

const fieldsValidators = (req: Request, res: Response, next: () => void) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }
     
    next();
}


export {fieldsValidators}