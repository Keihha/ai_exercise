import { Router } from 'express';
import { davinci03Connection } from '../controllers/prompt.controller';

import { fieldsValidators } from '../middlewares/fields-validators';
import { check } from 'express-validator';

const prompt = Router();


prompt.post('/', [
    check('prompt', 'PROMPT input is required').not().isEmpty(),
    check('prompt', 'PROMPT must be a STRING type').isString(),
    fieldsValidators
], davinci03Connection);


export { prompt };