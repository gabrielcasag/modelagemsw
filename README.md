## Trabalho de Modelagem de Software

Um app para consulta de previsões do tempo, utilizando a API do [OpenWeather](https://openweathermap.org/api)
desenvolvido durante a disciplina de Modelagem de Software.

## Como executar localmente?

- Clone este repositório.

- Entre na raiz do projeto e instale as dependencias:

`npm install`

- Acesse o site https://openweathermap.org/api, faça seu cadastro e crie uma chave de API.

- Crie um arquivo chamado `api-config.ts` no diretório `src/environment` do projeto, com o conteúdo abaixo alterando a propriedade `api_key` para a sua chave de API:

```ts
export const OPEN_WEATHER_CONFIG = {
  api_key: "<sua-chave-da-api>",
  api_url: "https://api.openweathermap.org/data/2.5/onecall",
  api_icon_url: "http://openweathermap.org/img/wn",
};
```

- Para executar a aplicação use:

`ionic serve` ou
`npm run start`

## Vídeo de apresentação

- [Vídeo](https://drive.google.com/file/d/1fV8dpD2Bq7T7OOOB13I3JfZHlXImfQoN/view?usp=sharing)

## Integrantes

- apenas eu @gabrielcasag 🤠
