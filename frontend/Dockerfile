# frontend/Dockerfile
FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm i sharp
RUN npm install @chakra-ui/react
RUN npm install lucide-react
RUN npm install @mui/material @emotion/react @emotion/styled

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
