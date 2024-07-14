FROM node:22-alpine

WORKDIR "/app"

COPY package*.json ./
RUN npm install

COPY . .
RUN npx tsc
EXPOSE ${PORT}
CMD ["node", "dist/index.js"]