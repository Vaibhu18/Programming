"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const page = () => {
  const [token, setToken] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setIsVerified(true);
    } catch (error) {
      console.log("error in verification");
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken);
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);
  return (
    <div>
      <h1>Email verification</h1>
      <h2>{token ? `${token}` : "no token"}</h2>
      {isVerified && (
        <h2>
          You are verified user <Link href="/login">login</Link>{" "}
        </h2>
      )}
    </div>
  );
};

export default page;
