# Set the base image
FROM node:13
# Create app directory
WORKDIR /usr/src/app
# Copy package.json AND package-lock.json
COPY package*.json ./
# Install all dependencies
RUN npm ci 
# Copy the rest of the code
COPY . .
# Expose the port 
EXPOSE 8080

#COPY --from=.aws /usr/src/app/.aws  /root/
# Define the command that should be executed
CMD [ "npm", "run", "dev" ]
# [ "mv" ,".aws"," ~" ]