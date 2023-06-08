import axios from 'axios';
import { UploadedFile } from 'express-fileupload';
import FormData from 'form-data';
import fs from 'fs';


const transcribeAudio = async () => {
    try {
        const url = 'https://api.openai.com/v1/audio/transcriptions';
        const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
        const model = 'whisper-1';
        const filePath = './tmp/audio.mp3';

        const readStream = fs.createReadStream(filePath);

        const formData = new FormData();
        formData.append('file', readStream);
        formData.append('model', model);

        const headers = {
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'multipart/form-data'
        };

        const response = await axios.post(url, formData, { headers });
        return response.data;
        
    } catch (error) {
        return error;
    }
}


export { transcribeAudio }