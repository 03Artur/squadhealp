FROM node:10.15.0-alpine as build-stage

WORKDIR ./

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY . .

FROM nginx:1.13.12-alpine as production-stage

COPY --from=build-stage ./build /var/www/html/

EXPOSE 80

COPY nginx.conf /etc/nginx/nginx.conf

COPY nginx.vh.default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
