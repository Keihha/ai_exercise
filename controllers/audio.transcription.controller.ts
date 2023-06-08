import { Request, Response } from "express";
import { UploadedFile } from 'express-fileupload';

import { rmvTempFile, transcription } from "../helpers/transciption.helpers";
import { davinci03Completion } from "../helpers/completion.request";


const audioPromptResolver = async (req: Request, res: Response) => {

    const archivo = req.files?.audio as UploadedFile;

    archivo.mv('./tmp/' + archivo.name)
        .then(async () => {
            const transcriptionText = await transcription();
            const outputDavinci03 = await davinci03Completion(transcriptionText.text);

            await rmvTempFile();

            res.status(200).json({
                outputDavinci03
            });
        })
        .catch((err) => {
            res.status(500).json({
                err
            });
        });
}


export { audioPromptResolver }