FROM node:18
WORKDIR /frontend
COPY /frontend/ .

WORKDIR /backend
COPY /backend/ .
RUN yarn
RUN yarn build
CMD ["yarn", "start"]