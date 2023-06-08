import { transcribeAudio } from "./whisper.request";
import fs from 'fs';

const transcription = async () => {
    const output = await transcribeAudio();

    return output;
}

const rmvTempFile = async () => {
    const filePath = './tmp/audio.mp3';
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error al eliminar el archivo:', err);
        } else {
            console.log('Archivo eliminado exitosamente');
        }
    });
}


export {rmvTempFile, transcription}