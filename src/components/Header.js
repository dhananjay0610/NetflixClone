import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
    //this will be called when component unmounts
    //unsubscribe is returned by firebase only
  }, []);

  const handleGPTSearch = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const showGPTSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className=" w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
      <img className="w-44 mx-auto md:mx-0 " src={LOGO} alt="logo" />
      {user && (
        <div className="justify-end flex p-2">
          <button
            className="px-2 md:px-4 py-2 mx-4 my-2 bg-purple-500 rounded-lg text-white"
            onClick={handleGPTSearch}
          >
            {showGPTSearch ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="hidden md:inline-block h-12 w-12 "
            alt="userIcon"
            src={USER_AVATAR}
          />
          <button className="font-bold text-white px-2" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
