📊 Energy Consumption Tracking System
A smart energy tracking system for calculating the daily, weekly, and monthly energy consumption costs of various home devices. Users can input their daily usage, and the system will automatically calculate and display the energy costs for each device.

🌐 Table of Contents
Project Overview
Features
Technologies Used
Installation
Usage
Calculations
Environment Variables
Contributing
License
📜 Project Overview
The Energy Consumption Tracking System is a tool designed to assist users in tracking energy consumption of various smart home devices, such as lights, air conditioners, and refrigerators. This system calculates energy costs based on the device's power rating and usage time input by the user.

✨ Features
Real-Time Cost Calculations: Calculates daily, weekly, and monthly consumption costs in real-time based on user input.
Interactive Table Management: Built using the TanStack React Table library for seamless state and data management.
Database Storage: Stores table data and updates using MongoDB Atlas.
Minimalistic Styling: Styled exclusively with Tailwind CSS for a clean, responsive interface.
Bonus: Fetch data using the SWR library for optimal server data retrieval.
🛠️ Technologies Used
Next.js (version 13+)
React (version 18+)
TypeScript
MongoDB Atlas (database)
TanStack React Table (table management)
SWR (server-side data fetching)
Tailwind CSS (styling)
🚀 Installation
Follow these steps to set up the project locally:

Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/energy-consumption-tracker.git
cd energy-consumption-tracker
Install Dependencies:

bash
Copy code
npm install
Set Up Environment Variables: Create a .env file in the root directory with the following content:

env
Copy code
MONGODB_URI=mongodb+srv://energy-database:123@cluster0.i9xvd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

Run the Application:

bash
Copy code
npm run dev
The app should now be running at http://localhost:3000.

🧭 Usage
Open the application in your browser at http://localhost:3000.
Add information for each device:
Device Name
Power (in Watts)
Daily Usage Hours
See real-time calculations for:
Daily Cost
Weekly Cost
Monthly Cost
The data is stored in a MongoDB Atlas cluster, ensuring persistent tracking of device information and usage patterns.

🔢 Calculations
The application uses these formulas to calculate energy costs:

Daily Cost:

Device Power
×
Daily Usage Hours
×
0.001
×
Electricity Cost per kWh
Device Power×Daily Usage Hours×0.001×Electricity Cost per kWh
Example: For a device with 100W power and 5 hours of daily usage:

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
100×5×0.001×0.5=0.25₪
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
The Electricity Cost per kWh is set to 0.5 ₪.

⚙️ Environment Variables
The project requires the following environment variable:

MONGODB_URI: MongoDB Atlas connection string to store and manage the table data.
🤝 Contributing
Fork the Repository on GitHub.
Clone your fork:
bash
Copy code
git clone https://github.com/ChaniBenYair/Energy-Consumption.git
Create a New Branch for your changes:
bash
Copy code
git checkout -b feature/YourFeatureName
Commit your changes:
bash
Copy code
git commit -m 'Add some feature'
Push the branch to your fork:
bash
Copy code
git push origin feature/YourFeatureName
Open a Pull Request.
📜 License
This project is licensed under the MIT License. See the LICENSE file for more information.

Happy Tracking! 🎉
