FROM node:lts-alpine
WORKDIR /app
COPY ./package*.json ./
RUN npm install
RUN npm install nodemon --save-dev
COPY . .
ENTRYPOINT [ "npm", "start" ]