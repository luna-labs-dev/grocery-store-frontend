FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

RUN npm install -g serve

EXPOSE 3030

CMD [ "serve", "-s", "-l", "3030", "dist" ]