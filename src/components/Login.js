import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInform, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInform);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-[100%]"
          alt="logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>

      <form className="text-white cursor-vertical-text w-3/12 absolute p-12 rounded-lg bg-black bg-opacity-80 my-36 mx-auto right-0 left-0">
        <h1 className="font-bold text-3xl py-4">
          {isSignInform ? "Sign in" : "Sign Up"}
        </h1>
        {!isSignInform && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-600 rounded-lg "
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-600 rounded-lg "
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInform ? " Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInform
            ? "New to Netflix? Sign Up now"
            : "Already registered ?Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
