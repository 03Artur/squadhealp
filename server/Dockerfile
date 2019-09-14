FROM node:10.13.0

ARG NODE_ENV="production"

RUN mkdir /server

RUN mkdir -p /var/www/html/images

WORKDIR /server

COPY package*.json ./

RUN npm install -g sequelize-cli

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8081

CMD npm run serve