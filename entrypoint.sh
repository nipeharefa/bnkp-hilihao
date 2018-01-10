#!/bin/bash

# Environment
# - DOMAIN_(1,2,3,...)=domain_name|domain_path|type
# - TIMEZONE=Asia/Jakarta
# - PHP_FPM_SERVER=php-host:9000

# Nginx Configuration
NGINX_SYS_DIR=/etc/nginx
NGINX_DIR=/etc/nginx/conf
CONF_DIR="$NGINX_DIR/conf.d"
NGINX_WORKER=$(grep -c "processor" /proc/cpuinfo)

# Backup original configuration
cp $NGINX_DIR/nginx.conf $NGINX_DIR/nginx.conf.original

# mkdir
mkdir -p $CONF_DIR

cat > "$NGINX_DIR/nginx.conf" <<END
user root;
worker_processes $NGINX_WORKER;

error_log  /etc/nginx/logs/error.log warn;
pid        /var/run/nginx.pid;
events {
    worker_connections 1024;
    multi_accept on;
}

http {
    passenger_root /usr/local/bundle/gems/passenger-5.1.12;
    passenger_ruby /usr/local/bin/ruby;
    
    include       $NGINX_DIR/mime.types;
    default_type  application/octet-stream;

    log_format  main  '\$remote_addr - \$remote_user [\$time_local] "\$request" '
                      '\$status \$body_bytes_sent "\$http_referer" '
                      '"\$http_user_agent" "\$http_x_forwarded_for"';
    # access_log  /etc/nginx/access.log  main;
    # include /etc/nginx/upstream.conf;
    include $CONF_DIR/*.conf;

    gzip on;
    gzip_disable "msie6";
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_min_length 1100;
    gzip_buffers 16 8k;
    gzip_http_version 1.1;
    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
    client_max_body_size 50M;
    client_body_buffer_size 1m;
    client_body_timeout 15;
    client_header_timeout 15;
    keepalive_timeout 15;
    send_timeout 15;
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
}

END

# Creating virtualhost
count="0"

while [ true ]
do
    (( count++ ))
    DOMAIN="DOMAIN_$count"
    DOMAIN=${!DOMAIN}
    # Check total domain
    if [ -z ${DOMAIN} ]; then
        break
    fi

    # Check domain format
    DETAIL=(${DOMAIN//|/ })
    if [ ! ${#DETAIL[@]}  -eq 3 ]; then
        echo "Invalid format DOMAIN_$count, format: domain_name|path|type" >&2
    fi

    DOMAIN_NAME=${DETAIL[0]}
    DOMAIN_PATH=${DETAIL[1]}
    DOMAIN_TYPE=${DETAIL[2]}
    DOMAIN_ENV=${DETAIL[3]}

    cat > "$CONF_DIR/$DOMAIN_NAME.conf" <<END
server {
    listen 80;
    server_name $DOMAIN_NAME;
    passenger_enabled on;
    rails_env development;

    root $DOMAIN_PATH/public;

    # redirect server error pages to the static page /50x.html
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
END

    echo "127.0.0.1 $DOMAIN_NAME" >> /etc/hosts
done

# forward request and error logs to docker log collector
ln -sf /dev/stdout $NGINX_SYS_DIR/logs/access.log \
&& ln -sf /dev/stderr $NGINX_SYS_DIR/logs/error.log

/etc/nginx/sbin/nginx -g 'daemon off;'