# frontend/Dockerfile
FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm i sharp
COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
