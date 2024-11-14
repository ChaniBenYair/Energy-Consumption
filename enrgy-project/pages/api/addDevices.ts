import clientPromise from "../../lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function addDevice(req: NextApiRequest, res: NextApiResponse) {
  console.log("enter function addDevice");

  if (req.method !== "POST") {
    return res.status(405).end(); 
  }

  const devices = req.body; 

  try {
    const client = await clientPromise;
    console.log("conecting");

    const db = client.db("energy-tracker");
    
    const result = await db.collection("devices").insertMany(devices);
    console.log("insert success");
    
  } catch (error) {
    console.error("Wornggg", error);
    res.status(500).json({ error: "Failed to add devices" });
  }
}
