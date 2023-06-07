import { Configuration, OpenAIApi } from "openai";

const davinci03Completion = async (prompt: String, maxTokens: number = 50) => {
    try{

        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        
        const openai = new OpenAIApi(configuration);
        
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}`,
            max_tokens: maxTokens,
            temperature: 0,
        });
        
        return response.data;
        
    } catch(error){
        console.error(error);
    }

}

export {davinci03Completion}