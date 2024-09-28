# Этап сборки
FROM node:18-alpine AS builder

WORKDIR /app

# Копируем файлы package.json и package-lock.json (если есть)
COPY package*.json ./

# Если package-lock.json отсутствует, используем npm install вместо npm ci
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Копируем остальные файлы проекта
COPY . .

# Собираем проект
RUN npm run build

# Этап запуска
FROM node:18-alpine

WORKDIR /app

# Копируем только необходимые файлы из этапа сборки
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/next.config.mjs ./

# Устанавливаем только production-зависимости
RUN npm ci --only=production || npm install --only=production

# Указываем порт, который будет использовать приложение
EXPOSE 3000

# Команда для запуска приложения
CMD ["npm", "start"]