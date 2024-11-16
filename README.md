## 📊 Energy Consumption Tracking System

A smart system to track and calculate daily, weekly, and monthly energy costs for various household devices. Users can input daily usage hours, and the system will calculate and display the energy costs for each device.

## 🌐 Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Calculations](#calculations)
- [Environment Variables](#environment-variables)

## 📜 Project Overview
The **Energy Consumption Tracking System** helps users monitor energy consumption for household devices like lights, air conditioners, and refrigerators. The system calculates energy costs based on device power and usage time entered by the user.

## ✨ Features
- **Real-Time Cost Calculation**: Calculates daily, weekly, and monthly energy costs based on user input in real-time.
- **Interactive Table Management**: Built with the **TanStack React Table** library for smooth data and state management.
- **Database Storage**: Saves and updates data using **MongoDB Atlas**.
- **Minimalistic Design**: Clean, responsive design exclusively using **Tailwind CSS**.
- Uses **SWR** for efficient server data fetching.

## 🛠️ Technologies Used
- **Next.js** (version 13+)
- **React** (version 18+)
- **TypeScript**
- **MongoDB Atlas** (Database)
- **TanStack React Table** (Table Management)
- **SWR** (Server data fetching)
- **Tailwind CSS** (Styling)

## 🚀 Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ChaniBenYair/Energy-Consumption.git
   ```
   ```bash
   cd energy-consumption/enrgy-project
    ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Set Up Environment Variables: Create a .env.local file in the root directory with the following content:**
   ```bash
   MONGODB_URI=mongodb+srv://energy-database:123@cluster0.i9xvd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    ```
4. **Run the Application:**
   ```bash
   npm run dev
    ```
   The app should now be running at http://localhost:3000.
## 🧭 Usage
1. Open the app in your browser at http://localhost:3000.
2. Add information for each device:
- Daily Usage Hours
3. See real-time calculations for:
- Daily Cost
- Weekly Cost
- Monthly Cost
The data is saved in MongoDB Atlas to maintain continuous tracking of each device's usage and energy costs.

## 🔢 Calculations
The system uses the following formulas to calculate electricity costs:

- Daily Cost:

Device Power
×
Daily Usage Hours
×
0.001
×
Electricity Cost per kWh
Device Power×Daily Usage Hours×0.001×Electricity Cost per kWh
Example: For a 100W device with 5 daily usage hours:

100
×
5
×
0.001
×
0.5

- Weekly Cost:

Daily Cost
×
7
Daily Cost×7
- Monthly Cost:

Daily Cost
×
30
Daily Cost×30
Electricity Cost per kWh is set to 0.5 ₪.

## ⚙️ Environment Variables
The project requires the following environment variable:

- MONGODB_URI: MongoDB Atlas connection string for storing and managing table data.

## Happy Tracking! 🎉
