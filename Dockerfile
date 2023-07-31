FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
# RUN npm ci --omit=dev
# RUN npm ci

COPY . .

CMD npm run start:prod
