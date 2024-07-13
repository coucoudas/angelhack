FROM node:18-alpine

WORKDIR /frontend/

COPY package*.json /frontend/

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]