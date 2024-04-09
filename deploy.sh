#!/bin/bash

echo -e "\nInstalling dependencies..."

# Remove the 'node_modules' folder
rm -rf node_modules

# Install npm dependencies
npm install

echo -e "\nDependencies installed."

echo -e "\nBuild started..."

# Remove the 'dist' folder
rm -rf dist

# Build the project
npm run build

echo -e "\nBuild finished."

echo -e "\nDeploying the project started...\n"

# Use the Firebase project alias
firebase use default

# Deploy to the specified site
firebase deploy --only hosting:dataneuron-tasks-2

echo -e "\nDeployment finished."
