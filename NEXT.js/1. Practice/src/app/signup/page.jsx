"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.userName.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onSignup = async () => {
    try {
      setLoding(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("signup successful", response.data);
      router.push("/login");
    } catch (error) {
      console.log("Signup failed : ", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing..." : "Signup"}</h1>
      <hr />
      <label htmlFor="userName">userName</label>
      <input
        id="userName"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:outline-gray-300 text-black"
        value={user.userName}
        onChange={(e) => setUser({ ...user, userName: e.target.value })}
        placeholder="userName"
        type="text"
      />
      <label htmlFor="userName">email</label>
      <input
        id="email"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:outline-gray-300 text-black"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
        type="text"
      />
      <label htmlFor="userName">password</label>
      <input
        id="password"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:outline-gray-300 text-black"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        type="text"
      />
      {buttonDisabled ? (
        <button className="bg-[#00bbff] px-3 py-1 rounded-lg font-semibold cursor-not-allowed">
          Fill all fields
        </button>
      ) : (
        <button
          onClick={onSignup}
          className="bg-[#00bbff] px-3 py-1 rounded-lg font-semibold cursor-pointer"
        >
          Signup
        </button>
      )}
      <Link href="/login">Visit login page</Link>
    </div>
  );
};

export default Signup;
