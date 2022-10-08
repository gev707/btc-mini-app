FROM node:16-alpine AS deps

# Create app directory
WORKDIR /app

COPY package*.json yarn.lock ./

RUN npm install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]