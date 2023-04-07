FROM node:16.20.0-alpine

RUN mkdir /home/app

COPY . /home/app/

WORKDIR /home/app

RUN npm install

CMD [ "npm","start" ]