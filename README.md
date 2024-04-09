# DataNeuron Task 2 Portal

This is the repository for the DataNeuron Task 2 Portal.

## Getting Started

### Installation Instructions

1. Clone the repository:

```bash
git clone https://github.com/raman2798/dataneuron-task-2-portal.git

cd dataneuron-task-2-portal
```

2. Install node and npm

3. Install dependencies:

```
npm install
```

4. Set the environment variables:

```bash
cp .env.example .env

# Open .env and modify the environment variables if needed
```

### Starting the Server

To start the server on localhost, run:

```bash
npm run dev
```

# Deployment Script

This script automates the deployment process to Firebase Hosting for different environments.

## Prerequisites

- Ensure that you have the Firebase CLI installed on your machine.

## Set execution permissions for the script:

```bash
chmod +x deploy.sh
```

## Run the script:

```bash
./deploy.sh
```
