import Server from './models/classes/server';
import dotenv from 'dotenv';

dotenv.config();

const main = async () => {
    const serverUp = new Server();
    serverUp.listen();
}

main();