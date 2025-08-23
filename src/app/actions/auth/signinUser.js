"use server";

import dbConnect, { collectionNameObj } from "@/lib/dbconnect";
import bcrypt from "bcrypt";

export const signinUser = async (payload) => {
  const { email, password } = payload;
  const userCollection = dbConnect(collectionNameObj.userCollection);
  const user = await userCollection.findOne({email});
  if (!user) return null;
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) return null;
  return user;
};
