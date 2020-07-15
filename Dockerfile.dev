FROM node:10-alpine
WORKDIR /app

RUN apk add --update python make g++ && rm -rf /var/cache/apk/*
COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm","run","dev"]