FROM node:10.13.0

RUN mkdir -p ./server

WORKDIR /server

COPY . .

RUN apt-get install libjpeg-dev libfontconfig1 && \
		npm install cluster-service && \
		npm install && \
		mkdir -p /var/www/html/images

EXPOSE 8081

CMD npm run serve
