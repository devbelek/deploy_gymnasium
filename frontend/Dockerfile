FROM node:18-alpine AS deps
WORKDIR /app

# Копируем файлы package*.json
COPY package.json ./

# Устанавливаем все зависимости, включая devDependencies
RUN npm install --legacy-peer-deps
RUN npm install -D typescript @types/node eslint

FROM node:18-alpine AS builder
WORKDIR /app

# Копируем зависимости и исходники
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Собираем приложение
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

USER nextjs
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["npm", "start"]