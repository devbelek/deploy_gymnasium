# Этап сборки
FROM node:18-alpine AS builder

WORKDIR /app

# Копируйте только файлы package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Установите зависимости. Используем npm install вместо npm ci для обновления lock файла в случае необходимости
RUN npm install

# Копируйте остальные файлы проекта
COPY . .

# Соберите проект
RUN npm run build

# Этап запуска
FROM node:18-alpine

WORKDIR /app

# Копируйте только необходимые файлы из этапа сборки
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# Установите только production-зависимости
RUN npm install --only=production

# Укажите порт, который будет использовать приложение
EXPOSE 3000

# Команда для запуска приложения
CMD ["npm", "start"]
