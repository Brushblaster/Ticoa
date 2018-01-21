FROM node:latest

#set dir
WORKDIR /usr/src/app

COPY ./server/package.json 
COPY ./server/package-lock.json 

