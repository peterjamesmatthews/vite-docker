FROM node:21

EXPOSE 5173

WORKDIR /web-app

CMD npm ci && npm run dev
