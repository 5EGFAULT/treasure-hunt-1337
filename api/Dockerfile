FROM node:16.13.1-alpine

WORKDIR /app/

ENV PATH /app/node_modules/.bin:$PATH
RUN npm i -g nodemon
RUN npm i -g ts-node
RUN npm config set unsafe-perm true
COPY package*.json ./
RUN npm install
RUN chown -R node /app/node_modules
USER node

COPY . ./

CMD [ "sh","run.sh"]

## this is the stage one , also know as the build step

#FROM node:16.15-alpine AS builder
#WORKDIR /usr/src/app
#COPY package*.json ./
#COPY . .
#RUN npm install
#RUN npm run build

### this is stage two , where the app actually runs

#FROM node:16.15-alpine as production

#WORKDIR /usr/src/app
#COPY package*.json ./
#RUN npm install --only=production
#COPY --from=builder /usr/src/app/dist ./dist
#EXPOSE 3000
#CMD npm start
