# README

Es fundamental contar con un token API de OpenAI para el funcionamiento de este pequeño ejemplo
La misma se ubicaria dentro de un archivo .env (revisar .example.env)

Para iniciar es necesario iniciar "app.ts", personalmente uso:

```
nodemon app.ts
```

(Version de NodeJS usada: 18.12.1)

*endpoint text prompt:*

[Endpoint_prompt]http://localhost:8080/prompt/

Este necesita una request con body JSON con el datos prompt y OPCIONALMENTE maxTokens (set 50):
Este ultimo determina la cantidad maxima de *tokens que se admiten en la respuesta procesada por el modelo "text-davinci-003"
La cantidad de tokens determina la longitud de la respuesta admitida

Ejemplo:

```
{
    "prompt": "Cuantos tipos de datos primitivos tiene hay Java?",
    "maxTokens": 100
}
```

*endpoint audio to text:*

[Endpoint_audio]http://localhost:8080/transcription/

Este recibe un file con la key audio y de nombre requerido "audio.mp3" en el form-data y retorna el texto del audio enviado

Dejo un ejemplo en POSTMAN

https://documenter.getpostman.com/view/19826196/2s93saZCpr

### Posdata

Decidi retirar de funcionamiento el limitador de 8 segundos en response ya que no siempre funcionaba de la manera correcta
