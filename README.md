# Energy Consumption Tracking System

## Overview

The Energy Consumption Tracking System is a web application designed to calculate and display the energy consumption costs for various smart home devices. It allows users to input daily usage hours for devices such as lights, air conditioners, refrigerators, and washing machines, and provides real-time calculations for daily, weekly, and monthly consumption costs.

## Technology Stack

- **Next.js (Version 13+)**
- **TypeScript**
- **React (Version 18+)**
- **MongoDB Atlas** for database storage
- **TanStack React Table** for table management
- **Tailwind CSS** for styling
- **SWR** for data fetching and real-time updates

## Project Setup

### Prerequisites

Before running the project, ensure you have the following installed:
- Node.js (version 18 or higher)
- npm or yarn
- MongoDB Atlas account and database setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/energy-consumption-tracking.git
cd energy-consumption-tracking
2. Install Dependencies
Run the following command to install the necessary dependencies:

npm install
3. Configure MongoDB Atlas
Create a MongoDB Atlas cluster.
Add a .env file in the root directory of the project with the following content:
env
MONGODB_URI=your-mongodb-connection-string
Replace your-mongodb-connection-string with the connection string for your MongoDB Atlas cluster.

4. Start the Local Server
Run the local server:

npm run dev
Your application should now be running at http://localhost:3000.

After opening the app in your browser, click on the Add Device button to add your first device and populate the database with initial data.
