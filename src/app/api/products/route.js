import dbConnect from "@/lib/dbconnect";
import { revalidatePath } from "next/cache";

// products get api
export async function GET() {
  try {
    const data = await dbConnect("products").find().toArray();
    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// post api
export async function POST(req) {
  try {
    const postedData = await req.json();
    const result = await dbConnect("products").insertOne(postedData);
    revalidatePath("/products");
    return Response.json(result);
  } catch (error) {
    return Response.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
