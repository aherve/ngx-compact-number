FROM mhart/alpine-node:8
MAINTAINER Aurélien Hervé <mail@aurelien-herve.com>

RUN npm install -g yarn && \
      mkdir -p /app /app/node_modules && \
      yarn global add @angular/cli@~6.0.7 \
      ng set --global packageManager=yarn

WORKDIR /app

ADD ./package.json .
ADD ./yarn.lock .
RUN yarn
