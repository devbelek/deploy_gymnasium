# Этап сборки
FROM node:18-alpine AS builder

WORKDIR /app

# Копируем файлы package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci || npm install

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Этап запуска
FROM node:18-alpine

WORKDIR /app

# Копируем необходимые файлы из этапа сборки
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./

# Устанавливаем только production-зависимости
RUN npm ci --only=production

# Указываем порт, который будет использовать приложение
EXPOSE 3000

# Команда для запуска приложения
CMD ["npm", "start"]