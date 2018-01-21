FROM node:latest

#set dir
WORKDIR /usr/src/app

COPY ./server/package*.json ./

RUN npm install --only=production

COPY ./server ./

CMD ["npm", "run", "docker"]



