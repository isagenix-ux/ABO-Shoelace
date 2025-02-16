#!/bin/bash

# Create directory structure
mkdir -p src/js src/styles src/images

# Create .npmrc for Font Awesome Pro
echo "@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=FAPS-GTBK-HEBM-AENE-2402" > .npmrc

# Create package.json
echo '{
  "name": "shoelace-foundation-app",
  "version": "1.0.0",
  "description": "Web app using Shoelace and Foundation grid",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@shoelace-style/shoelace": "^2.12.0",
    "foundation-sites": "^6.8.1"
  },
  "devDependencies": {
    "sass": "^1.69.5",
    "vite": "^5.0.0"
  }
}' > package.json

# Create the main files
touch index.html vite.config.js src/js/main.js src/styles/main.scss

# Install dependencies
npm install

# Launch the development server
npm run dev 