// pages/api/updateDevice.ts
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "PATCH") {
    const { id, dailyUsageHours, dailyCost, weeklyCost, monthlyCost } = req.body;
    
    try {
        const client = await clientPromise;
        console.log("conecting");
    
        const db = client.db("energy-tracker");
        
        const result = await db.collection("devices").updateOne(
        { id },
        { $set: { dailyUsageHours, dailyCost, weeklyCost, monthlyCost } }
      );
      res.status(200).json({ message: "Device updated successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to update device" });
    }
  } else {
    res.setHeader("Allow", ["PATCH"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
