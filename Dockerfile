FROM node:latest
LABEL Yuri Oliveira
COPY . /var/www
WORKDIR /var/www
RUN npm install
EXPOSE 3000

CMD npm run start