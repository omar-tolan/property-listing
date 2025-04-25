FROM node:20-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
COPY docker.env ./

EXPOSE 3333

CMD ["npm", "start"]
