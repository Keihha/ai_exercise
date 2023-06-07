import { Request, Response } from "express";
import { UploadedFile } from 'express-fileupload';
import fs from 'fs';
import { transcribeAudio } from "../helpers/whisper.request";


const transcriptor = async (req: Request, res: Response) => {

    const archivo = req.files?.audio as UploadedFile;

    archivo.mv('./tmp/' + archivo.name)
        .then(async () => {
            const rta = await transcribeAudio();

            res.status(200).json({
                transcription: rta
            });
        })
        .then(async () => {
            const filePath = './tmp/audio.mp3';
            fs.unlink(filePath, (err) => {
                if (err) {
                  console.error('Error al eliminar el archivo:', err);
                } else {
                  console.log('Archivo eliminado exitosamente');
                }
              });
        })
        .catch((err) => {
            res.status(500).json(err);
        });

}


export { transcriptor }