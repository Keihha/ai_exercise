import express, { Application } from 'express';
import { Request, Response } from "express";
import cors from 'cors';
import fileUpload from 'express-fileupload';

import { audioTranscription } from '../../routes/audio.transcription.routes';
import { prompt } from '../../routes/prompt.routes'


class Server {
    private app: Application;
    private port: String;
    private paths = {
        audioTranscription: '/transcription',
        prompt: '/prompt'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';

        this.middlewares();
        this.routes();
    }

    private middlewares() {
        // this.app.use((req: Request, res: Response) => {
            // res.setTimeout(8000, () => {
            //    return res.status(503).json({ error: 'Tiempo de espera agotado (maximo 8 segundos)' });
            // });
        // });
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(fileUpload());
    }

    private routes() {
        this.app.use(this.paths.audioTranscription, audioTranscription);
        this.app.use(this.paths.prompt, prompt)
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}


export default Server;
