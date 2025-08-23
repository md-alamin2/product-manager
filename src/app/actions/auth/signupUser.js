"use server";

import dbConnect, { collectionNameObj } from "@/lib/dbconnect";
import bcrypt from "bcrypt";

export const signupUser = async (payload) => {
  const userCollection = dbConnect(collectionNameObj.userCollection);
  // validation
  if (!payload.name || !payload.email || !payload.password) {
    alert("Please fill in all fields.");
    return null;
  }
  const user = await userCollection.findOne({ email: payload.email });
  if (!user) {
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    const result = await userCollection.insertOne({ ...payload, password: hashedPassword });
    result.insertedId = result.insertedId.toString();
    return result;
  } else {
    alert("User already exists");
    return null;
  }
};
