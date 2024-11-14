import clientPromise from "../../lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function getDevices (req: NextApiRequest, res: NextApiResponse)  {
  console.log("enter to get function")
  const client = await clientPromise;
  const db = client.db("energy-tracker");
  const devices = await db.collection("devices").find({}).toArray();
  res.json(devices);
};