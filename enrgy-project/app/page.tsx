
"use client";

import React, { useState } from "react";
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { FetchDevices } from "@/components/FetchDevices";
import AddDevice from "@/components/addDevicesClient";

type Device = {
  id: number;
  name: string;
  power: number;
  dailyUsageHours: number;
  dailyCost: number;
  weeklyCost: number;
  monthlyCost: number;
};

export default function DeviceTable() {
  const [data, setData] = useState<Device[]>([]);

  // פונקציה לעדכון שעות השימוש והחישובים
  const handleUsageChange = async (id: number, newHours: number) => {
    setData((prevData) =>
      prevData.map((device) => {
        if (device.id === id) {
          const dailyCost = device.power * newHours * 0.001 * 0.5;
          const updatedDevice = {
            ...device,
            dailyUsageHours: newHours,
            dailyCost: dailyCost,
            weeklyCost: dailyCost * 7,
            monthlyCost: dailyCost * 30,
          };

          // שליחת בקשת עדכון לשרת
          fetch("/api/updateDevice", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id,
              dailyUsageHours: newHours,
              dailyCost: updatedDevice.dailyCost,
              weeklyCost: updatedDevice.weeklyCost,
              monthlyCost: updatedDevice.monthlyCost,
            }),
          }).catch((error) => console.error("Failed to update device:", error));

          return updatedDevice;
        }
        return device;
      })
    );
  };

  const columns: ColumnDef<Device>[] = [
    { accessorKey: "name", header: "Device Name" },
    { accessorKey: "power", header: "Power (W)" },
    {
      accessorKey: "dailyUsageHours",
      header: "Daily Usage Hours",
      cell: ({ row }) => (
        <input
          type="number"
          value={row.original.dailyUsageHours}
          onChange={(e) => handleUsageChange(row.original.id, Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-2 w-24 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ),
    },
    { accessorKey: "dailyCost", header: "Daily Cost (₪)" },
    { accessorKey: "weeklyCost", header: "Weekly Cost (₪)" },
    { accessorKey: "monthlyCost", header: "Monthly Cost (₪)" },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="container mx-auto p-6">
      <FetchDevices onDataFetched={setData} />
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
        <thead className="bg-gray-200">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase"
                  style={{ width: '15%' }} // קביעת רוחב קבוע לכל כותרת
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-t hover:bg-gray-50 transition-colors duration-200"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-6 py-4 text-sm text-gray-800"
                  style={{ width: '15%' }} // קביעת רוחב קבוע לכל תא
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
