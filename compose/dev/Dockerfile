# Use small base image with nodejs 17
FROM node:17

# set current work dir
WORKDIR /usr/src/app

# Copy package.json, packge-lock.json into current dir
COPY ["package.json", "package-lock.json*", "./"]

# install dependencies
RUN npm install

# copy sources
COPY . .

# Run app
CMD npm rebuild esbuild && yarn dev