import React, { useContext } from "react";
import profile from "../../../assets/images/profile/profile.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="lg:mr-20 brightness-90 px-5 sm:px-10 md:px-20">
      <h2 className="text-3xl font-semibold text-primary-focus text-center mb-5 mt-10">
        Profile
      </h2>
      <div className="relative h-80 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="">
            <img className="w-36 h-36 rounded-full" src={profile} alt="" />
            <h3 className="text-xl font-semibold text-white text-center">
              {user?.displayName}
            </h3>
            <p className="text-white text-center">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
