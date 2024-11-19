'use client'
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Profile = () => {
  const router = useRouter();
  const [data, setData] = useState(null);

  const getUserDetails = async () => { 
    const response = await axios.post("/api/users/profile");
    console.log(response)
    setData(response.data.data._id);
  };

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      console.log("logout completed");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      {data ? <Link href={`/profile/${data}`}>{data}</Link> : "Not data font"}
      <hr />
      <button onClick={getUserDetails}>Get User data </button> <br />
      <button onClick={logout}>Logout </button>
    </div>
  );
};

export default Profile;
