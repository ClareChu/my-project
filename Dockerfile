FROM node:8
ENV MAINTAINER="docker_user  docker_user@mail.com" \
    HOME=/usr/src/app \
    PATH=/usr/local/bin:$PATH:/usr/src/app
WORKDIR /usr/src/app
RUN npm install --registry=https://registry.npm.taobao.org \
    && npm install -g http-server 
USER node
EXPOSE 8080
CMD [ "http-server", "dist" ]