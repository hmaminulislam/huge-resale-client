import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
  const { createUser, updateUser, signInGoogle } = useContext(AuthContext);
  const [signUpEmail, setSignUpEmail] = useState('');
  const {token} = useToken(signUpEmail)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if(token){
    navigate(from, { replace: true });
  }
  //sign up form handle
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const role = form.role.value;
    const password = form.password.value;
    const userInfo = {
      name,
      email,
      role
    }
    const profileInfo = {
      displayName: name,
    };
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const userEmail = result.user.email;
        updateUser(profileInfo)
          .then((result) => {
            //create user database
            fetch("http://localhost:5000/users", {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.acknowledged) {
                  setSignUpEmail(userEmail)
                  toast.success("User create successful");
                }
              });
          })
          .then((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
        toast.error("Not create account");
      });
  };
  //google handle
  const googleHandle = () => {
    signInGoogle()
      .then((result) => {
        const userDetails = result.user;
        const name = userDetails.displayName;
        const email = userDetails.email;
        console.log(userDetails);
        const userInfo = {
          name,
          email,
          role: 'buyer'
        }
        //user create or update database
        fetch("http://localhost:5000/users", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              setSignUpEmail(email)
              toast.success("Sign in successful");
            }
          });
      })
      .catch((error) => {
        toast.error("Sign in not successful");
        console.log(error);
      });
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-3">Sign Up</h2>
      <div className="flex justify-center items-center bg-primary w-full sm:w-8/12 md:w-7/12 lg:w-4/12 mx-auto">
        <div className="w-full px-10 mt-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="text-gray-200">
                Name
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-gray-200">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input w-full"
                required
              />
            </div>
            <div className="mb-4 mt-4">
              <label htmlFor="role" className="text-gray-200">
                Role
              </label>
              <select name="role" className="select w-full">
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="text-gray-200">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input w-full"
                required
              />
            </div>
            <div className="mb-4">
              <button className="btn btn-secondary w-full">Sign Up</button>
            </div>
          </form>
          <p className="text-center text-white">
            Already have an account?{" "}
            <Link className="text-secondary font-bold" to="/login">
              Login
            </Link>
          </p>
          <div className="divider">OR</div>
          <div
            onClick={googleHandle}
            className="flex justify-center items-center bg-lime-500 mb-10 py-2 cursor-pointer text-white"
          >
            <FcGoogle className="text-3xl mr-4"></FcGoogle>
            <span>Google</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;