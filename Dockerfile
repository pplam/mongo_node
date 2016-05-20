FROM node:argon
RUN mkdir -p /home/zhiwen/dir/
WORKDIR /home/zhiwen/dir/
COPY package.json /home/zhiwen/dir/
RUN npm install
COPY . /home/zhiwen/dir/
EXPOSE 44444
CMD ["npm", "start"]

