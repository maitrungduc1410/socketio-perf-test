# FROM node:16
FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm i -g pm2

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]