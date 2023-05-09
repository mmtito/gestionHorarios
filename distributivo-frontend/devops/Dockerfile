FROM nginx
COPY devops/nginx/nginx /distributivo/nginx/
COPY dist/distributivo-frontend /distributivo/dist
COPY devops/nginx/mime.types /etc/nginx/mime.types
ENTRYPOINT ["nginx", "-g", "daemon off;"]