FROM node:alpine as builder

ADD . /app
WORKDIR /app

RUN npm install
RUN npm run build

FROM nginx:alpine-slim
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html