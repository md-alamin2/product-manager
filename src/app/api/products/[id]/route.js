import dbConnect from "@/lib/dbconnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const data = await dbConnect("products").findOne({ _id: new ObjectId(id) });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Failed to fetch product" }, { status: 500 });
  }
}
