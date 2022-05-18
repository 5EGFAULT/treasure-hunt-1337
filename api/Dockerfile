FROM node:16.13.1-alpine

WORKDIR /app/

ENV PATH /app/node_modules/.bin:$PATH

#RUN npm config set unsafe-perm true
COPY package*.json ./
RUN npm install
#RUN chown -R node /app/node_modules
#USER node

COPY . ./

CMD [ "sh","run.sh"]