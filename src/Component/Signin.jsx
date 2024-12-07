import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AmazonLogo from "../assets/amazon.svg";
import {
  createUserWithEmailPassword,
  signInUserWithEmailPassword,
  createUserWithGoogle,
} from "../firebase/Auth";

export const Signin = () => {
  const navigate = useNavigate();
  const [isSignin, setSignin] = useState(true);
  const [loginError, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordView, setPasswordView] = useState(false);

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !email.includes("@")) {
      setError("Please provide a valid email and password.");
      return;
    }
    try {
      if (isSignin) {
        // Try signing in the user
        await signInUserWithEmailPassword(email, password);
        navigate("/");
      } else {
        // Create a new user
        await createUserWithEmailPassword(email, password);
        navigate("/");
      }
    } catch (error) {
      if (isSignin && error.code === "auth/user-not-found") {
        // Prompt to create account if user is not registered
        setError("User not found. Switching to Sign Up.");
        setSignin(false);
      } else {
        setError(error.message);
      }
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await createUserWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="relative flex flex-col gap-4 w-full max-w-screen overflow-x-hidden h-screen mt-[100px]">
      <div className="flex flex-col items-center gap-4 p-4">
        <Link className="cursor-pointer flex amazon-logo items-start min-w-24" to={"/"}>
          <img src={AmazonLogo} alt="Amazon Logo" height={38} className="h-9" />
        </Link>
        <div className="flex flex-col border rounded divide-y w-min gap-4 p-5">
          <div className="flex flex-col w-min gap-2.5">
            <span className="text-3xl mb-1.5">Sign {isSignin ? "in" : "up"}</span>
            <form className="flex flex-col gap-1.5" onSubmit={handleAuthSubmit}>
              <span className="text-xs font-semibold">Email or mobile phone number</span>
              <input
                className="text-sm rounded-sm border active:border-[#017184] border-black outline outline-4 active:outline-[#c8f3fa] hover:outline-[#c8f3fa] outline-white w-72 py-1 px-2.5"
                type="email"
                value={email}
                placeholder="Enter your Email Address!"
                onChange={(e) => setEmail(e.target.value)}
              />
              {email && (
                <div className="relative flex justify-end items-center w-72">
                  <input
                    className="password text-sm rounded-sm border active:border-[#017184] border-black outline outline-4 active:outline-[#c8f3fa] hover:outline-[#c8f3fa] outline-white flex-1 py-1 ps-2.5 pe-8"
                    type={passwordView ? "text" : "password"}
                    value={password}
                    placeholder="Enter your password!"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <img
                    className="absolute cursor-pointer px-1"
                    onClick={() => setPasswordView(!passwordView)}
                    src={`https://img.icons8.com/fluency-systems-filled/18/${
                      passwordView ? "visible" : "hide"
                    }.png`}
                    alt="show/hide password"
                  />
                </div>
              )}
              <button
                type="submit"
                className="text-xs font-medium bg-[#ffd812] active:bg-primary-0 rounded-lg shadow p-1.5 my-2.5"
              >
                Continue
              </button>
            </form>
            {loginError && (
              <div className="text-sm text-center text-red-600 font-medium">
                {loginError}
              </div>
            )}
            {!isSignin && (
              <span className="text-xs text-wrap">
                By continuing, you agree to Amazon's
                <span className="text-blue-700"> Conditions of Use </span> and
                <span className="text-blue-700"> Privacy Notice.</span>
              </span>
            )}
            <div className="flex flex-col py-2.5">Need help?</div>
          </div>
          <div className="flex flex-col gap-1.5 pt-4">
            <span className="text-xs font-semibold">Buying for work?</span>
            <span className="text-xs text-blue-700 font-medium">
              Shop on Amazon Business
            </span>
          </div>
        </div>
        <div className="flex items-center text-xs text-gray-500 gap-2 w-80">
          <hr className="flex-1" />
          <span>
            {isSignin ? "New to Amazon?" : "Already have an Account?"}
          </span>
          <hr className="flex-1" />
        </div>
        <button
          className="text-xs font-medium border shadow scale-105 rounded-lg w-80 active:bg-gray-100 py-1.5 px-2"
          onClick={() => setSignin(!isSignin)}
        >
          {isSignin
            ? "Create your Amazon account"
            : "Login to your Amazon account"}
        </button>
        <button
          className="text-xs font-medium border shadow scale-105 rounded-lg w-80 active:bg-gray-100 py-1.5 px-2"
          onClick={handleGoogleSignIn}
        >
          Google Sign In
        </button>
      </div>
      <div className="bg-[#fcfcfc] flex flex-col items-center text-xs flex-1 gap-3 h-max">
        <div className="auth-footer-seperation h-0.5 w-full"></div>
        <div className="text-blue-700 flex scale-90 gap-7 pt-4">
          <span>Conditions of Use</span> <span>Privacy Notice</span>
          <span>Help</span>
        </div>
        <span className="text-gray-800 scale-90">
          © 1996-2024, Amazon.Jashandeep Kaur, Inc. or its affiliates
        </span>
      </div>
    </div>
  );
};

export default Signin;
