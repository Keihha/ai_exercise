import { Request, Response } from "express";


const fileValidatorUp = async (req: Request, res: Response, next: () => void) => {
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.audio) {
        return res.status(400).json({
            msg: 'No  files were uploaded.', 
            warning: 'audio is the name to upload file'
        });
    }
    next();
}

export {fileValidatorUp}