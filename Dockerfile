# Getting ngix base image
FROM nginx:alpine

# Maintainer
LABEL Aherredev <aherredev@gmail.com>

# COPY DIST folder into ngix server
COPY dist /usr/share/nginx/html

# Run server
CMD ["nginx", "-g", "daemon off;"]
