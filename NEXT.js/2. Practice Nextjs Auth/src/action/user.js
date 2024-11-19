"use server";

import connectDB from "@/lib/db";
import { User } from "@/models/User";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { CredentialsSignin } from "next-auth";
import { signIn } from "@/auth";

const login = async (FormData) => {
  const email = FormData.get("email");
  let password = FormData.get("password");

  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
    });
  } catch (error) {
    // redirect("/register");
    throw new Error("user not found");
  }
  redirect("/");
};

const register = async (FormData) => {
  const firstName = FormData.get("firstname");
  const lastName = FormData.get("lastname");
  const email = FormData.get("email");
  let password = FormData.get("password");

  if (!firstName || !lastName || !email || !password) {
    throw new Error("Please fill all fields");
  }

  await connectDB();

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");
  password = await bcrypt.hash(password, 10);
  const createdUser = await User.create({
    firstName,
    lastName,
    email,
    password,
  });
  console.log("User created", createdUser);
  redirect("/login");
};

const fetchAllUsers = async () => {
  await connectDB();
  const users = await User.find({});
  return users;
};

export { register, login, fetchAllUsers };
