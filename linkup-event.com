server {
    listen 80;
    listen [::]:80;
    server_name linkup-event.com;
    
    return 301 https://$server_name$request_uri;
}

# HTTPS server
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name linkup-event.com;

    # SSL certificates (added by certbot)
    ssl_certificate /etc/letsencrypt/live/linkup-event.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/linkup-event.com/privkey.pem;
    
    # SSL configuration (added by certbot)
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    root /var/www/linkup-event.com;
    index index.html;

    # Handle React Router
    location / {
        try_files $uri $uri/ @fallback;
    }

    location @fallback {
        rewrite ^.*$ /index.html last;
    }

    # Serve static assets
    location /assets/ {
        try_files $uri =404;
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Cache other static files
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Deny hidden files
    location ~ /\. {
        deny all;
    }

    # Block bot scanner paths
    location ~ ^/(ecp|server-status|login\.action|_all_dbs|\.env|config\.json|telescope|info\.php|api-docs|api|actuator|@vite|debug) {
        return 404;
        access_log off;
    }
}