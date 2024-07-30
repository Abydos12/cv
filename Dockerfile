FROM node:22.5.1-alpine as builder

COPY . /app
WORKDIR /app

RUN npm ci --no-fund --no-audit --no-progress
RUN npm run build

FROM nginx:1.27.0-alpine-slim
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html