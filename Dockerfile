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

FROM nginx:alpine as production
RUN rm -rf  /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /web-app/dist /usr/share/nginx/html/dist
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
