FROM node:14-alpine

RUN mkdir -p /usr/src/my-ai
WORKDIR /usr/src/my-ai


COPY . .
RUN npm install
RUN npm install --global nodemon

EXPOSE 3000

CMD [ "nodemon","src/index.js" ]