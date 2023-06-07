import { Request, Response } from "express";
import { davinci03Completion } from "../helpers/completion.request";

const davinci03Connection = async (req: Request, res: Response) => {

    const { prompt, maxTokens } = req.body;
    
    try {
        const rta = await davinci03Completion(prompt, maxTokens);

        // La respuesta se encuentra en rta.choices[0].text
        // Pero he decidido dejar todo el output para mas informacion
        res.status(200).json({
            rta
        });
    } catch (err) {
        res.status(500).json({
            err
        })
    }

}

export { davinci03Connection }