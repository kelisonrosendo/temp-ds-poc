### 💻 Projeto

POC para exportação de uma biblioteca de componentes utilizando o Vuetify

### 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Vuetify](https://vuetifyjs.com/)

### 🎮 Rodar aplicação

#### pasta z-components (biblioteca de componentes)

1. `npm i` (para instalar as dependências)
2. `npm run build` (para gerar o pacote com os componentes exportados no arquivo `components/index.js`)
3. `cp package.json dist` (copiar o arquivo `package.json` para a pasta `dist`)
4. `npm run serve` (para rodar o projeto)

#### pasta basic-project (um projeto qualquer que vai consumir a biblioteca)

1. `npm i` (para instalar as dependências)
2. `npm i (npm pack C:/projetos/temp-ds-poc/z-components/dist)` (para instalar a biblioteca localmente)
3. `npm run serve` (para rodar o projeto)
