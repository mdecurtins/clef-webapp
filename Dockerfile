# Based on http://mherman.org/blog/2017/12/07/dockerizing-a-react-app/#.Wm5EI6inGUk
FROM node:9.3-alpine

# Set working dir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Add files to image
ADD . /usr/src/app

# Add node binaries to path
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install dependencies
ADD package.json /usr/src/app/package.json
RUN npm install

# Install Flat.io embed
RUN npm install flat-embed

CMD [ "npm", "start" ]