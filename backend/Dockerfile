FROM nginx:alpine

# Установка зависимостей
RUN apk add --no-cache --virtual .build-deps \
    gcc \
    libc-dev \
    make \
    openssl-dev \
    pcre-dev \
    zlib-dev \
    linux-headers \
    curl \
    gnupg \
    libxslt-dev \
    gd-dev \
    geoip-dev \
    git

# Получение исходного кода Nginx
RUN cd /tmp && \
    curl -fSL https://nginx.org/download/nginx-${NGINX_VERSION}.tar.gz -o nginx.tar.gz && \
    tar -zxC /tmp -f nginx.tar.gz

# Клонирование модуля ngx_brotli
RUN cd /tmp && \
    git clone --recursive https://github.com/google/ngx_brotli.git

# Сборка Nginx с модулем Brotli
RUN cd /tmp/nginx-${NGINX_VERSION} && \
    ./configure --with-compat --add-dynamic-module=/tmp/ngx_brotli && \
    make modules

# Копирование собранных модулей
RUN cp /tmp/nginx-${NGINX_VERSION}/objs/*.so /usr/lib/nginx/modules/

# Очистка
RUN apk del .build-deps && \
    rm -rf /tmp/* /var/cache/apk/*

# Копирование конфигурации Nginx
COPY ../nginx.conf /etc/nginx/nginx.conf