FROM node:14-alpine

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn install --frozen-lockfile

CMD [ "node", "index.js" ]

COPY . .
