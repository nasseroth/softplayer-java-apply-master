FROM node:10 as angular
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular /src/app/docker-softplayer /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t softplayer-angular .
# docker run -p 8081:80 softplayer-angular
