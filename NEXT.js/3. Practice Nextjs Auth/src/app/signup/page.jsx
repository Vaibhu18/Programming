"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState({ userName: "", email: "", password: "" });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      router.push("/login");
    } catch (error) {
      console.log("user register failed");
    }
  };

  useEffect(() => {
    if (
      user.userName.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border px-3 py-2">
        <h1 className=" text-center text-2xl mb-2">
          {loading ? "Processing..." : "Signup User"}
        </h1>
        <div className="flex flex-col ">
          <label htmlFor="username">userName</label>
          <input
            id="username"
            type="text"
            placeholder="username"
            value={user.userName}
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
            className=" outline-none px-1 py-1 rounded-md mb-2 text-black"
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className=" outline-none px-1 py-1 rounded-md mb-2 text-black"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            placeholder="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className=" outline-none px-1 py-1 rounded-md mb-2 text-black"
          />
          {buttonDisabled ? null : (
            <>
              <button
                onClick={onSignup}
                className=" bg-blue-500 rounded-md py-2"
              >
                Sign up
              </button>
            </>
          )}
        </div>
        <p className="mt-3">
          Already acoount?{" "}
          <Link href="/login" className=" text-red-500">
            login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
