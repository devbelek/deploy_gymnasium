# frontend/Dockerfile
FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm i sharp
RUN npm install @chakra-ui/react
RUN npm install lucide-react
RUN npm install @radix-ui/react-dialog @radix-ui/react-label @radix-ui/react-avatar
RUN npm install react-debounce-input
COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]