# base image
FROM node:10.15.3-alpine

RUN mkdir /home/app
WORKDIR /home/app

COPY package.json /home/app
COPY . /home/app/

RUN npm install

CMD [ "npm", "start" ]

