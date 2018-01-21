FROM node:latest

#set dir
WORKDIR /usr/src/app

COPY ./server/package*.json ./

RUN npm install --only=production

COPY ./server ./server

EXPOSE 8080

CMD ["npm", "run", "docker"]
