ה# 📊 Energy Consumption Tracking System

A smart system to track and calculate daily, weekly, and monthly energy costs for various household devices. Users can input daily usage hours, and the system will calculate and display the energy costs for each device.

## 🌐 Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Calculations](#calculations)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## 📜 Project Overview
The **Energy Consumption Tracking System** helps users monitor energy consumption for household devices like lights, air conditioners, and refrigerators. The system calculates energy costs based on device power and usage time entered by the user.

## ✨ Features
- **Real-Time Cost Calculation**: Calculates daily, weekly, and monthly energy costs based on user input in real-time.
- **Interactive Table Management**: Built with the **TanStack React Table** library for smooth data and state management.
- **Database Storage**: Saves and updates data using **MongoDB Atlas**.
- **Minimalistic Design**: Clean, responsive design exclusively using **Tailwind CSS**.
- **Bonus**: Uses **SWR** for efficient server data fetching.

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
   git clone https://github.com/your-username/energy-consumption-tracker.git
   cd energy-consumption-tracker
   
**2. Install Dependencies:**
npm install

**3. Set Up Environment Variables: Create a .env file in the root directory with the following content:**
MONGODB_URI=your-mongodb-connection-string
Replace your-mongodb-connection-string with your MongoDB Atlas connection string.

Run the Application:

bash
Copy code
npm run dev
The app should now be running at http://localhost:3000.

🧭 Usage
Open the app in your browser at http://localhost:3000.
Add information for each device:
Device Name
Power (in Watts)
Daily Usage Hours
See real-time calculations for:
Daily Cost
Weekly Cost
Monthly Cost
The data is saved in MongoDB Atlas to maintain continuous tracking of each device's usage and energy costs.

🔢 Calculations
The system uses the following formulas to calculate electricity costs:

Daily Cost:

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
=
0.25
₪
‘
‘
‘
100×5×0.001×0.5=0.25₪‘‘‘
Weekly Cost:

Daily Cost
×
7
Daily Cost×7
Monthly Cost:

Daily Cost
×
30
Daily Cost×30
Electricity Cost per kWh is set to 0.5 ₪.

⚙️ Environment Variables
The project requires the following environment variable:

MONGODB_URI: MongoDB Atlas connection string for storing and managing table data.
🤝 Contributing
Fork the repository on GitHub.
Clone your fork:
bash
Copy code
git clone https://github.com/your-username/energy-consumption-tracker.git
Create a New Branch for your changes:
bash
Copy code
git checkout -b feature/YourFeatureName
Commit your changes:
bash
Copy code
git commit -m 'Add some feature'
Push the Branch to your fork:
bash
Copy code
git push origin feature/YourFeatureName
Open a Pull Request.
📜 License
The project is licensed under the MIT License. For more information, see the LICENSE file.

Happy Tracking! 🎉
