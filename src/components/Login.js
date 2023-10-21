import React, { useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
//import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [isSignInform, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInform);
  };

  const [errmsg, setErrMsg] = useState(null);
  //const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate the form data
    const errmsg = checkValidData(email.current.value, password.current.value);
    //  console.log(errmsg);
    setErrMsg(errmsg);
    //login or sign up

    if (errmsg) return;

    //sign in or sign up
    if (!isSignInform) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              console.log("user profile updated");
              console.log(user);
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );

    //          navigate("/browse");
            })
            .catch((error) => {
              console.log("can't update user profile");
              setErrMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorMessage);
          setErrMsg(errorCode + " - " + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Sign in " + user);
      //    navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-[100%] h-auto"
          alt="logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-white cursor-vertical-text w-3/12 absolute p-12 rounded-lg bg-black bg-opacity-80 my-36 mx-auto right-0 left-0"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInform ? "Sign in" : "Sign Up"}
        </h1>
        {!isSignInform && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="p-4 my-4 w-full bg-gray-600 rounded-lg "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-600 rounded-lg "
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600 rounded-lg"
        />
        <p className="text-red-400 font-bold text-lg p-2">{errmsg}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
