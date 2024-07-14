FROM node:18-alpine

WORKDIR /frontend/

COPY ./ ./
RUN npm ci

RUN npm run build
RUN rm -rf src

EXPOSE 5173

CMD ["npx", "serve", "-s", "build", "-l", "5173"]
