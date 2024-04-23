FROM node:20.12.2-alpine as builder

COPY . /app
WORKDIR /app

RUN npm ci --no-fund --no-audit --no-progress
RUN npm run build

FROM nginx:1.25.5-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html