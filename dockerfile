FROM node:16-slim AS builder
WORKDIR /app
COPY package.json ./
RUN yarn install 
COPY . ./
RUN yarn build

FROM nginx:1.19.0
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]