import dbConnect from "@/lib/dbconnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = await params;

  const data = await dbConnect("products").findOne({ _id: new ObjectId(id) });

  return Response.json({ data });
}