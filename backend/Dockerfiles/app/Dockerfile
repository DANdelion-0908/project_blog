FROM node:latest

WORKDIR /backend

COPY package*.json ./

RUN npm install express mysql cors crypto-js

COPY ./backend/src ./src

CMD ["npm", "start"]