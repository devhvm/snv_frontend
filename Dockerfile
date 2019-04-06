# base image
FROM node:10.15.3-alpine

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
# Copying source files
COPY . .
RUN npm install
# Building app
RUN npm run build

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Running the app
CMD [ "npm", "start" ]
