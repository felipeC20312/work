FROM node:20.11-alpine3.18 as build

WORKDIR /app

RUN npm install -g gatsby-cli

COPY package*.json ./

RUN npm install

COPY . ./

RUN gatsby build

FROM nginx:1.21-alpine
EXPOSE 80
COPY --from=build /app/public /usr/share/nginx/html