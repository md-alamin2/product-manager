
import dbConnect from "@/lib/dbconnect";
import { revalidatePath } from "next/cache";

// products get api
export async function GET() {
  const data = await dbConnect("products").find().toArray()
  return Response.json( data )
}

// post api
export async function POST(req) {

  const postedData = await req.json()
  const result = await dbConnect("products").insertOne(postedData);
  revalidatePath("/products")
  return Response.json(result)
}