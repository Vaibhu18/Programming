"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onLogin = async () => {
    try {
      setLoding(true);
      const response = await axios.post("/api/users/login", user);
      console.log("login successful", response.data);
      router.push("/profile");
    } catch (error) {
      console.log("login failed : ", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing..." : "Login"}</h1>
      <hr />
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
          onClick={onLogin}
          className="bg-[#00bbff] px-3 py-1 rounded-lg font-semibold cursor-pointer"
        >
          Login
        </button>
      )}
      <Link href="/signup">Visit signup page</Link>
    </div>
  );
};

export default Login;
