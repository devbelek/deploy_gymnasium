FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
RUN npm install -D @next/bundle-analyzer next-pwa @tanstack/react-query

COPY . .

# Очистим next.config.mjs от лишних зависимостей
RUN echo 'const config = {images:{domains:["3-gymnasium.kg"],minimumCacheTTL:60},poweredByHeader:false,compress:true};export default config;' > next.config.mjs

RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]