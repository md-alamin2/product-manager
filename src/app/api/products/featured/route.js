import dbConnect from "@/lib/dbconnect";

export async function GET() {
    const query = {featured: true}
  const data = await dbConnect("products").find(query).toArray();
  console.log(data)

  return Response.json( data )
}