FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json ./
RUN npm install --legacy-peer-deps
RUN npm install -D typescript @types/node eslint

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Создаем директорию для кэша и устанавливаем права
RUN mkdir -p .next/cache/images
RUN chown -R nextjs:nodejs .next

COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Устанавливаем правильные права для всех файлов
RUN chown -R nextjs:nodejs .

USER nextjs
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["npm", "start"]