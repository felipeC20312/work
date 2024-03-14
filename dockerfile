FROM node:20.11-alpine3.18 as build

WORKDIR /app

RUN npm install -g gatsby-cli

COPY package*.json ./

RUN npm install

COPY . ./

RUN gatsby build

EXPOSE 80

CMD gatsby serve --port 80 --host 0.0.0.0
