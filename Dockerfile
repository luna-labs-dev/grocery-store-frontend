FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3030

CMD [ "yarn", "preview" ]