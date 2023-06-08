import { Router } from 'express';
import { audioPromptResolver } from '../controllers/audio.transcription.controller';

import { fileValidatorUp } from '../middlewares/fileup-validato';
import { fieldsValidators } from '../middlewares/fields-validators';

const audioTranscription = Router();


audioTranscription.post('/', [
    fileValidatorUp,
    fieldsValidators
], audioPromptResolver);


export { audioTranscription };