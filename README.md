# Crypto Price Fetcher Application

This Node.js application fetches cryptocurrency prices and stores them in a MongoDB database. It uses `node-cron` to schedule tasks that fetch crypto data at regular intervals.

## Features

- Fetches cryptocurrency prices and stores them in a database.
- Uses a cron job to fetch new data every 2 hours.
- Saves data on the first API call if the database is empty.

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose)
- **node-cron** (for task scheduling)
- **dotenv** (for environment variable management)

## Setup Instructions

### Prerequisites

- Node.js and npm installed.
- MongoDB running locally or a connection string to a MongoDB Atlas cluster.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   
2. Navigate into the project directory:
  
    ```bash
    cd KoinX-Assignment

3. Install the dependencies:
   ```bash
   npm install

4. Set up environment variable in a .env file:
   ```bash
   PORT=<your-port>
   MONGODB_URI=<your-mongodb-connection-string>

5. Start the server:
   ```bash
   npm start


