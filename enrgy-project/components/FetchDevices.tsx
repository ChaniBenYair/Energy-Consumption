import React, { useState, useEffect } from "react";

type Device = {
  id: number;
  name: string;
  power: number;
  dailyUsageHours: number;
  dailyCost: number;
  weeklyCost: number;
  monthlyCost: number;
};

interface FetchDevicesProps {
  onDataFetched: (data: Device[]) => void;
}

export function FetchDevices({ onDataFetched }: FetchDevicesProps) {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("api/getDevice");
      if (response.ok) {
        const devices: Device[] = await response.json();
        onDataFetched(devices);
      } else {
        console.error("Failed to fetch devices");
      }
    }
    fetchData();
  }, [onDataFetched]);

  return null;
}
