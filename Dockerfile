FROM node:10-alpine
WORKDIR /app

ENV REDIS_HOST=127.0.0.1
ENV REDIS_PORT=6379
ENV NODE_ENV=development
ENV PORT=5000


RUN apk add --update python make g++ && rm -rf /var/cache/apk/*
COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm","run","dev"]

EXPOSE 5000