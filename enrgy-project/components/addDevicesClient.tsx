"use client";
import React from "react";

type Device = {
  id: number;
  name: string;
  power: number;
  dailyUsageHours: number;
  dailyCost: number;
  weeklyCost: number;
  monthlyCost: number;
};

export default function AddDevice() {
  const initialDevices: Device[] = [
    { id: 1, name: "Light Bulb", power: 60, dailyUsageHours: 0, dailyCost: 0, weeklyCost: 0, monthlyCost: 0 },
    { id: 2, name: "Refrigerator", power: 150, dailyUsageHours: 0, dailyCost: 0, weeklyCost: 0, monthlyCost: 0 },
    { id: 3, name: "Air Conditioner", power: 2000, dailyUsageHours: 0, dailyCost: 0, weeklyCost: 0, monthlyCost: 0 },
  ];

  const addDevice = async () => {
    console.log("Adding device...");
    const response = await fetch("/api/addDevices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(initialDevices),
    });
    if (response.ok) {
      alert("Devices added successfully!");
    } else {
      alert("Failed to add devices.");
    }
  };

  return (
    <div>
      <button onClick={addDevice}>Add Devices</button>
    </div>
  );
}
