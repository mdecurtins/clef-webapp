# Based on https://medium.com/ai2-blog/dockerizing-a-react-application-3563688a2378
FROM node:9.3-alpine

ENV NPM_CONFIG_LOGLEVEL warn

RUN npm install -g serve

CMD serve -s build

EXPOSE 5000

COPY package.json package.json
COPY npm-shrinkwrap.json npm-shrinkwrap.json

RUN npm install

COPY . .

RUN npm run build --production