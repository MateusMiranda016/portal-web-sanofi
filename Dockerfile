# Use a Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire application code into the container
COPY . .

# Expose the port for the React app (defaults to port 3000)
EXPOSE 3000

# Run the build command to create the production build
RUN npm start

# Start the production build of the React app
CMD ["npm", "start"]
