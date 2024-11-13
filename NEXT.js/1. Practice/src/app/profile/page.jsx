"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const Profile = () => {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const getUserData = async () => {
    const response = await axios.post("/api/users/me");
    console.log(response.data.data);
    setData(response.data.data._id);
  };

  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      toast.success("logout successful");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile Page</h1>
      <hr />
      <h2>
        {data == "nothing" ? (
          "No data"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <button className="bg-[#00bbff] px-3 py-1 rounded-lg font-semibold cursor-pointer mb-3" onClick={logout}>Logout</button>
      <button className="bg-[#ff039e] px-3 py-1 rounded-lg font-semibold cursor-pointer" onClick={getUserData}>Get User Details</button>
    </div>
  );
};

export default Profile;
