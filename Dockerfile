# syntax=docker/dockerfile:1
FROM node:21 AS install
WORKDIR /web-app
COPY package.json package-lock.json ./
RUN npm install

FROM install as source
COPY . .

FROM source as develop
EXPOSE 5173
CMD npm run dev

FROM source as build
RUN npm run build

FROM build as preview
EXPOSE 4173
CMD npm run preview

# TODO FROM nginx:alpine as production
